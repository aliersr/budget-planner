import React from 'react';

import { formatDate } from '../helpers';

const Bill = ({ bill }) => {
  const { category, nameBill, amount, id } = bill;
  return (
    <div className='bill my-shadow'>
      <div className='content-bill'>
        <div className='description-bill'>
          <p className='category'>{category}</p>
          <p className='name-bill'>{nameBill}</p>
                  <p className='date-bill'>
                      Added: {''}
                      <span>{ formatDate }</span>
                      </p>
        </div>
      </div>
    </div>
  );
};

export default Bill;
