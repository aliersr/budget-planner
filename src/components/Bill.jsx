import React from 'react';
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import { formatFecha } from '../helpers';

import IconSave from '../img/icono_ahorro.svg';
import IconHome from '../img/icono_casa.svg';
import IconFood from '../img/icono_comida.svg';
import IconBill from '../img/icono_gastos.svg';
import IconHobby from '../img/icono_ocio.svg';
import IconVacations from '../img/icono_travelling.svg';
import IconHealth from '../img/icono_salud.svg';
import IconSuscriptions from '../img/icono_suscripciones.svg';


const dictionaryIcons = {
  save: IconSave,
  home: IconHome,
  food: IconFood,
  bill: IconBill,
  hobby: IconHobby,
  vacations: IconVacations,
  health: IconHealth,
  subscriptions: IconSuscriptions,
};

const Bill = ({ bill, setEditBill, deleteBill }) => {
  const { category, nameBill, amount, id, date } = bill;

  const leadingActions = () => (

    <LeadingActions>
      <SwipeAction
        onClick={() =>
          setEditBill(bill)
        }
      >Edit
      </SwipeAction>
    </LeadingActions>
  );


  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        
        onClick={() => deleteBill(id)}
        destructive={true}
      >
        Delete
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='bill my-shadow'>
          <div className='content-bill'>
            <img src={dictionaryIcons[category]} />

            <div className='description-bill'>
              <p className='category'>{category}</p>
              <p className='name-bill'>{nameBill}</p>
              <p className='date-bill'>
                Added: {''}
                <span>{formatFecha()}</span>
              </p>
            </div>
          </div>
          <p className='amount-bill'>${amount}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Bill;
