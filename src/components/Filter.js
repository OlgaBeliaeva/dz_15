import React from 'react';

const Filter = ({ setFilter }) => {
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Filter users by name"
      onChange={handleChange}
    />
  );
};

export default Filter;