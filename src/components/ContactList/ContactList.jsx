import React from 'react';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul className={css.list}>
    {contacts.map(({ id, name, number }) => (
      <Contact
        key={id}
        id={id}
        name={name}
        number={number}
        onDelete={onDelete}
      />
    ))}
  </ul>
);

export default ContactList;
