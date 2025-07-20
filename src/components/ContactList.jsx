import React from 'react';
import ContactItem from './ContactItem';
import styles from './ContactList.module.css'; 

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={() => onDeleteContact(contact.id)}
        />
      ))}
    </ul>
  );
}

export default ContactList;
