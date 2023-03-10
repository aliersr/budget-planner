import { useState, useEffect } from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import '../assets/styles-progress-bar.css';

const BudgetManagement = ({
  budget,
  setBudget,
  bills,
  setBills,
  setIsValidBudget
}) => {
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

  const handleResetApp = () => {
    const message = confirm('Do you want Reset the budgets and bills?');

    if (message) {
      setBills([])
      setBudget(0)
      setIsValidBudget(false)
    }
  }

  return (
    <div className='container-budget container my-shadow two-columns'>
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: percentage > 100 ? '#DC2626' : '#3B82F6'
          })}
          value={percentage}
          text={`${percentage}% Expense`}

        />
      </div>

      <div className='contents-budget'>
        <button
          className="reset-app"
          type="button"
          onClick={handleResetApp}
        >
          Reset App
        </button>
        <p>
          <span>Budget: </span> {formatAmount(budget)}
        </p>
        <p className={`${avaible < 0 ? 'negative' : ''}`}>
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
