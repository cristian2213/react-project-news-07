import React, { useState } from 'react';

const useSelect = (initialState, options) => {
  // option selected
  const [state, updateState] = useState('');

  // load dynamically the Select tag and update state
  const NewsSelect = () => (
    <select
      className="browser-default"
      onChange={e => updateState(e.target.value)}
      value={state}
    >
      <option value="general">-- General --</option>
      {options.map(option => (
        <option value={option.value} key={option.value} >{option.label}</option>
      ))}
    </select>
  );

  return [state, NewsSelect];
}

export default useSelect;