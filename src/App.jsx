import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import SearchBox from './components/SearchBox';
import ContactList from './components/ContactList';
import styles from './App.module.css'; 

const LOCAL_STORAGE_KEY = 'phonebook-contacts';

function App() {
  // Kişiler state'i, başlangıçta örnek verilerle
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  // Arama filtresi için state
  const [filter, setFilter] = useState('');

  // Sayfa yüklendiğinde localStorage'dan kişiler okunur ve state'e yazılır
  useEffect(() => {
    const storedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  // contacts değiştiğinde localStorage güncellenir
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

 //Kişi silme fonksiyonu
 const handleDeleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  // Yeni kişi ekleme fonksiyonu
  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  // Arama filtresi değiştiğinde state güncellenir
  const handleFilterChange = (value) => {
    setFilter(value);
  };

  // Filtrelenmiş kişiler
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
}

export default App;