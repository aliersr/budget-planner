import  { useState, useEffect } from 'react';

const BudgetManagement = ({ budget, bills }) => {
  const [avaible, setAvaible] = useState(0);
  const [spented, setSpented] = useState(0);

  useEffect(() => {
    const totalSpented = bills.reduce((total, bill) => Number(bill.amount) + total, 0);
    const totalAvalible = budget - totalSpented;
    
    setAvaible(totalAvalible);
    setSpented(totalSpented);
    
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
      <p>Grafica</p>

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
