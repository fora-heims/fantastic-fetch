import React from 'react';
import './Controls.css';

export default function Controls({
  number,
  setNumber,
  handleClick,
  setLoading,
}) {
  return (
    <div>
      <label>
        Select how many random animals to display:
        <select
          value={number}
          onChange={(e) => {
            setLoading(true);
            setNumber(e.target.value);
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <button onClick={handleClick}>Again, again</button>
      </label>
    </div>
  );
}
