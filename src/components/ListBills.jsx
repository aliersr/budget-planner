import React from 'react';

import Bill from './Bill';

const ListBills = ({ bills, setEditBill, deleteBill }) => {

  return (
    <div className="list-bills container">
      <h2>{bills.length ? 'Bills' : 'No Bills'}</h2>

      {bills.map((bill) => (
        <Bill
          key={bill.id}
          bill={bill}
          setEditBill={setEditBill}
          deleteBill={deleteBill}
         
        />
      ))}
    </div>
  );
};

export default ListBills;