import { useState, useEffect } from 'react';

import Message from './Message';
import IconCloseModal from '../img/close.svg';

const Modal = ({
  setModal,
  animateModal,
  setAnimateModal,
  saveBill,
  editBill,
  setEditBill
}) => {
  const [nameBill, setNameBill] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    if (Object.keys(editBill).length > 0) {
      setNameBill(editBill.nameBill);
      setAmount(editBill.amount);
      setCategory(editBill.category);
      setId(editBill.id)
      setDate(editBill.date);
    }

  }, [])

  const hideModal = () => {
    setAnimateModal(false);
    setEditBill({})
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nameBill, amount, category].includes('')) {
      setMessage('All fields are required');

      setTimeout(() => {
        setMessage('');
      }, 3000);

      return;
    }

    saveBill({ nameBill, amount, category, id, date });

  };

  return (
    <div className='modal'>
      <div className='close-modal'>
        <img
          src={IconCloseModal}
          alt='Close Modal Window'
          onClick={hideModal} />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`my-form ${animateModal ? 'animate' : 'close'}`}>
        <legend>{editBill.nameBill ? "Edit Bill" : "New Bill"}</legend>

        {message && <Message type='error'>{message}</Message>}

        <div className='field'>
          <label htmlFor='name'>Bill Name</label>
          <input
            id='name'
            type='text'
            placeholder='Add Bill Name'
            value={nameBill}
            onChange={(e) => setNameBill(e.target.value)} />
        </div>

        <div className='field'>
          <label htmlFor='amount'>Amount</label>
          <input
            id='amount'
            type='number'
            placeholder='Add amount expense: Exm. 300'
            value={amount}
            onChange={(e) => setAmount(e.target.value)} />
        </div>

        <div className='field'>
          <label htmlFor='category'>Category</label>
          <select name='' id='category' value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value=''>-- Select</option>
            <option value='save'>Save</option>
            <option value='home'>Home</option>
            <option value='food'>Food</option>
            <option value='hobby'>Hobby</option>
            <option value='vacations'>Vacations</option>
            <option value='health'>Health</option>
            <option value='subscriptions'>Subscriptions</option>
            <option value='Other'>Other</option>
          </select>
        </div>
        <input
          type='submit'
          value={
            editBill.nameBill ? 'Save' : 'Add Bill'
          } />
      </form>
    </div>
  );
};

export default Modal;
