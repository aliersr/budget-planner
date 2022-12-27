import { useState, useEffect } from 'react';

import Header from './components/Header';
import Modal from './components/Modal';
import ListBills from './components/ListBills';
import Filters from './components/Filter';
import { generarId } from './helpers';
import IconNewBill from './img/new-bill.svg';

function App() {

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  );
  const [bills, setBills] = useState(
    localStorage.getItem('bills') ? JSON.parse(localStorage.getItem('bills')) : []
  );
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [editBill, setEditBill] = useState({});
  const [filter, setFilter] = useState('');

  //TODO: AQUI me quede
  const [filterBills, setFilterBills] = useState([]);

  useEffect(() => {
    if (filter) {
      //Filter by categories
      const filterBills = bills.filter(bill => bill.category === filter)
      console.log(filterBills);

    }
  }, [filter]);

  useEffect(() => {
    localStorage.setItem('budget', budget) ?? 0;
  }, [budget]);

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0;

    if (budget > 0) {
      setIsValidBudget(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bills', JSON.stringify(bills) ?? []);
  }, [bills]);

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
            <Filters
              filter={filter}
              setFilter={setFilter}

            />
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
