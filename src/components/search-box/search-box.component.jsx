import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeHolder, handleChange}) => {
  return (
    <input
      className='search-box'
      type='search'
      placeholder={placeHolder}
      onChange={handleChange}
    />
  );
}