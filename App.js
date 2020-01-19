import React, { useState } from 'react';
import './App.css';

function App() {
  const [inVals, setVals] = useState([]);
  const [inVal, setVal] = useState({ text: '', isFavorite: true, type:'noun' });
  const onChange = (ev)=> {
    const change = {};
    change[ev.target.name] = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;
    setVal({...inVal, ...change})
  }
  const onSubmit = (ev)=> {
    ev.preventDefault();
    setVals([...inVals, inVal]);
    setVal({ text: '', isFavorite: true, type: 'noun'})
  }
  return (
    <div className='App'>
          {
            inVals.map( (inVal, idx) => {
              return (
                <li key={ idx } className={ inVal.isFavorite ? 'favorite': ''}>
                  { inVal.text } is a { inVal.type }
                </li>
              )
            })
          }
        <form onSubmit={ onSubmit }>
          <div>
          <input name='text' value={ inVal.text }
              onChange={ onChange }/>
          </div>
          <div>
          <input
            name='isFavorite'
            type='checkbox'
            checked={ inVal.isFavorite }
            onChange={ onChange }
          />
          {
            inVal.isFavorite ? 'Yes' : 'No'
          }
          </div>
          <div>
          <select name='type'
                  value={ inVal.type }
                  onChange={ onChange }
          >
            <option>verb</option>
            <option>noun</option>
            <option>adjective</option>
          </select>
          { inVal.type }
          </div>
          <button disabled={!inVal.text}>Submit</button>
          </form>
    </div>
  );
}

export default App;
