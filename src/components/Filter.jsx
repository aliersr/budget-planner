import { useState, useEffect } from 'react';

const Filter = ( { filter, setFilter }) => {
    const [first, setfirst] = useState('')
  return (
      <div className='filters my-shadow container '>
          <form>
              <div className='field'>
                  <label htmlFor="filter">Bills Filter</label>
                  <select
                      value={filter}
                      onChange={ e => setFilter(e.target.value) }
                  >
                      <option value=''>-- All Categories --</option>
                      <option value='save'>Save</option>
                      <option value='home'>Home</option>
                      <option value='food'>Food</option>
                      <option value='hobby'>Hobby</option>
                      <option value='vacations'>Vacations</option>
                      <option value='health'>Health</option>
                      <option value='subscriptions'>Subscriptions</option>
                      <option value='other'>Other</option>
                  </select>
              </div>
        </form>

    </div>
  )
}

export default Filter;