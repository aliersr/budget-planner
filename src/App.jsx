import { useState, useEffect } from 'react';

import Header from './components/Header';
import Modal from './components/Modal';
import ListBills from './components/ListBills';
import { generarId } from './helpers';
import IconNewBill from './img/new-bill.svg';

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [bills, setBills] = useState(
    []
    // localStorage.getItem('bills') ? JSON.parse(localStorage.getItem('bills')) : []
  );
  const [editBill, setEditBill] = useState({});

  useEffect(() => {
    if (Object.keys(editBill).length > 0) {
      setModal(true);


      setTimeout(() => {
        setAnimateModal(true);
      }, 500);
    }

  }, [editBill])


  const handleNewBill = () => {
    setModal(true);
    setEditBill({})

    setTimeout(() => {
      setAnimateModal(true);
    }, 1000);
  };

  const saveBill = (bill) => {

    if (bill.id) {
      //Update
      const updateBills = bills.map(
        billState => billState.id === bill.id ? bill : billState);
      setBills(updateBills);
      setEditBill({});
    } else {

      bill.id = generarId();
      bill.date = Date.now();
      setBills([...bills, bill]);

    }

    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);

  };

  const deleteBill = id => {
    const updatedBills = bills.filter(bill => bill.id !== id);
    setBills(updatedBills);
  }

  return (
    <div className={modal ? 'pin-up' : ' '}>
      <Header
        bills={bills}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget} />

      {isValidBudget && (
        <>
          <main>
            <ListBills
              bills={bills}
              setEditBill={setEditBill}
              deleteBill={deleteBill}
            />
          </main>

          <div className='new-bill'>
            <img
              src={IconNewBill}
              alt='Icon New Bill'
              onClick={handleNewBill} />
          </div>
        </>
      )}

      {modal &&
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveBill={saveBill}
        editBill={editBill}
        setEditBill={setEditBill}
        />}
    </div>
  );
}

export default App;
