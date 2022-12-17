import { useState } from 'react';

import Header from './components/Header';
import Modal from './components/Modal';
import IconNewBill from './img/new-bill.svg';

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const handleNewBill = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 1000);
  };

  return (
    <div>
      <Header budget={budget} setBudget={setBudget} isValidBudget={isValidBudget} setIsValidBudget={setIsValidBudget} />
      {isValidBudget && (
        <div className='new-bill'>
          <img src={IconNewBill} alt='Icon New Bill' onClick={handleNewBill} />
        </div>
      )}

      {modal && <Modal setModal={setModal} animateModal={animateModal} setAnimateModal={setAnimateModal } />}
    </div>
  );
}

export default App;
