import React from 'react'

const BudgetManagement = ({ budget }) => {

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
          <span>Budget Available: </span> {formatAmount(0)}
        </p>
        <p>
          <span>Expense: </span> {formatAmount(0)}
        </p>
      </div>
    </div>
  );
}

export default BudgetManagement