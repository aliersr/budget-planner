import React from 'react'

import Bill from './Bill';

const ListBills = ({ bills }) => {

  return (
    <div className="list-bills container">
      <h2>{bills.length ? 'Bills' : 'No Bills'}</h2>
      {bills.map((bill) => (
        
          <Bill key={bill.id } bill={bill} />
        
      ))}
    </div>
  );
};

export default ListBills