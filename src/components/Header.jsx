import { useEffect } from 'react'

import NewBudget from './NewBudget';
import BudgetManagement from './BudgetManagement';


const Header = ({
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
  bills }) => {

  return (
    <header>
      <h1>Budget Planner</h1>

      {isValidBudget ? (
        <BudgetManagement
          bills={bills}
          budget={budget}


        />
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