import React from 'react';

export const TodoFilter = ({ value, onChange }) => {
  return (
    <label>
      Filter by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
