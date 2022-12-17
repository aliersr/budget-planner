import React from 'react'

import NewBudget from './NewBudget';
import BudgetManagement from './BudgetManagement';


const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget }) => {


 

  return (
    <header>
      <h1>Budget Planner</h1>

      {isValidBudget ? (
        <div>
          <BudgetManagement
            budget={budget}
          />
        </div>
      ) : (
        <NewBudget 
        budget={budget} 
        setBudget={setBudget} 
        setIsValidBudget={setIsValidBudget} />
      )}
    </header>
  );
};

export default Header