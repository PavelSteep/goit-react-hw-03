import React from 'react';
import css from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => (
  <li className={css.contact}>
    <div className={css.icons}>
      <span className={css.iconUser}>&#128100;</span>
      <span className={css.iconPhone}>&#128222;</span>
    </div>
    <div className={css.details}>
      <p className={css.name}>{name}</p>
      <p className={css.number}>{number}</p>
    </div>
    <button className={css.deleteButton} onClick={() => onDelete(id)}>Delete</button>
  </li>
);

export default Contact;
