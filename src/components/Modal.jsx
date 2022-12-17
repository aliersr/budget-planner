import React from 'react';

import BudgetManagement from './BudgetManagement';
import IconCloseModal from '../img/close.svg';

const Modal = ({ setModal, animateModal, setAnimateModal }) => {
  const hideModal = () => {
      setTimeout(() => {
          setModal(false);
        }, 500);
        setAnimateModal(false);
  };

  return (
    <div className='modal'>
      <div className='close-modal'>
        <img src={IconCloseModal} alt='Close Modal Window' onClick={hideModal} />
      </div>
      <form className={`my-form ${animateModal ? 'animate' : 'close'}`}>
        <legend>New Bill</legend>

        <div className='field'>
          <label htmlFor='name'>Bill Name</label>
          <input id='nombre' type='text' placeholder='Add Bill Name' />
        </div>

        <div className='field'>
          <label htmlFor='amount'>Amount</label>
          <input id='amount' type='number' placeholder='Add amount expense: Exm. 300' />
        </div>

        <div className='field'>
          <label htmlFor='category'>Category</label>
          <select name='' id='category'>
            <option value=''>-- Select</option>
            <option value='save'>Save</option>
            <option value='food'>Food</option>
            <option value='other'>Other bill</option>
            <option value='vacation'>Vacation</option>
            <option value='health'>Health</option>
            <option value='subscriptions'>Subscriptions</option>
          </select>
              </div>
              <input type="submit" value="Add Billf" />
      </form>
    </div>
  );
};

export default Modal;
