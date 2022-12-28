import React from 'react';

import Bill from './Bill';

const ListBills = ({
  bills,
  setEditBill,
  deleteBill,
  filter,
  filterBills
}) => {

  return (
    <div className="list-bills container">

      {
        filter ? (
          <>
            <h2>{bills.length ? 'Bills' : 'No Bills'}</h2>
            {filterBills.map((bill) => (
              <Bill
                key={bill.id}
                bill={bill}
                setEditBill={setEditBill}
                deleteBill={deleteBill}
              />
            ))}
          </>
        ) : (
          <>
            <h2>{filterBills.length ? 'Bills' : 'No Bills in this category '}</h2>
            {bills.map((bill) => (
              <Bill
                key={bill.id}
                bill={bill}
                setEditBill={setEditBill}
                deleteBill={deleteBill}

              />
            ))}
          </>
        )
      }

    </div>
  );
};

export default ListBills;