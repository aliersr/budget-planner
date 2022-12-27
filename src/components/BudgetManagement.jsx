import { useState, useEffect } from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import '../assets/styles-progress-bar.css';

const BudgetManagement = ({ budget, bills }) => {
  const [avaible, setAvaible] = useState(0);
  const [spented, setSpented] = useState(0);
  const [percentage, setPorcent] = useState(0);

  useEffect(() => {
    const totalSpented = bills.reduce((total, bill) => Number(bill.amount) + total, 0);
    const totalAvalible = budget - totalSpented;

    //Calc bill percentage 
    const newPercentage = (((budget - totalAvalible) / budget) * 100).toFixed(2);


    setAvaible(totalAvalible);
    setSpented(totalSpented);
    setTimeout(() => {
      setPorcent(newPercentage);
    }, 1500);

  }, [bills]);

  //Format Currency
  const formatAmount = (amount) => {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  return (
    <div className='container-budget container my-shadow two-columns'>
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: '#3B82F6'
          })}
          value={percentage}
          text={`${percentage}% Expense`}

        />
      </div>

      <div className='contents-budget'>
        <p>
          <span>Budget: </span> {formatAmount(budget)}
        </p>
        <p>
          <span>Budget Available: </span> {formatAmount(avaible)}
        </p>
        <p>
          <span>Expense: </span> {formatAmount(spented)}
        </p>
      </div>
    </div>
  );
};

export default BudgetManagement;
