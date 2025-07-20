import React from 'react';
import styles from './ContactItem.module.css'; // Doğru şekilde import

const ContactItem = ({ contact, onDelete }) => {
  return (
    <li className={styles.contactItem}>
      <span>{contact.name}: {contact.number}</span>
      <button className={styles.deleteBtn} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
