import { useState } from 'react';

import Message from './Message';

const NewBudget = ({
  budget,
  setBudget, setIsValidBudget }) => {

  const [message, setMessage] = useState('');

  const handleBudget = (e) => {
    e.preventDefault();

    if (!Number(budget) || Number(budget) < 0) {
      setMessage('Not valid Budget');
      return;
    }

    setMessage('');
    setIsValidBudget(true);
  };

  return (
    <div className='container-budget container my-shadow'>
      <form onSubmit={handleBudget} className='my-form'>
        <div className='field'>
          <label>Budget Definition</label>
          <input 
          className='new-budget' 
          type='number' 
          placeholder='Add a new budget' 
          value={budget} 
          onChange={(e) => setBudget(Number(e.target.value))} />
        </div>

        <input type='submit' value='Add Budget' />

        {message && <Message type='error'>{message}</Message>}
      </form>
    </div>
  );
};

export default NewBudget;
