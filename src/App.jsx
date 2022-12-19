import { useState } from 'react';

import Header from './components/Header';
import ListBills from './components/ListBills';
import Modal from './components/Modal';
import { generarId } from './helpers';
import IconNewBill from './img/new-bill.svg';

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [bills, setBills] = useState([]);

  const handleNewBill = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 1000);
  };

  const saveBill = (bill) => {
    bill.id = generarId();
    bill.date = Date.now();
    setBills([...bills, bill]);

    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);

   };
  
  return (
    <div>
      <Header budget={budget} setBudget={setBudget} isValidBudget={isValidBudget} setIsValidBudget={setIsValidBudget} />
      {isValidBudget && (
        <>
          <main>
            <ListBills bills={bills}  />
          </main>

          <div className='new-bill'>
            <img src={IconNewBill} alt='Icon New Bill' onClick={handleNewBill} />
          </div>
        </>
      )}

      {modal && <Modal setModal={setModal} animateModal={animateModal} setAnimateModal={setAnimateModal} saveBill={saveBill} />}
    </div>
  );
}

export default App;
