import React from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ filter, onChange }) => (
  <label className={css.label}>
    Find contacts by name
    <input 
      className={css.input} 
      type="text" 
      value={filter} 
      onChange={onChange} // Обработчик изменения значения поля
    />
  </label>
);

export default SearchBox;
