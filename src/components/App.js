import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { v4 as uuid } from "uuid";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";
import api from "../api/contacts";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("api/contacts", request);
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`api/contacts/${contact._id}`, contact);
    setContacts(contacts.map((c) => (c.id === contact.id ? response.data : c)));
  };

  const removeContactHandler = async (id) => {
    await api.delete(`api/contacts/${id}`);
    setContacts(contacts.filter((contact) => contact._id !== id));
  };

  const retrieveContacts = async () => {
    const response = await api.get("api/contacts");
    return response.data;
  };

  const searchHandler = (term) => {
    setSearchTerm(term);
    if (term) {
      const filteredContacts = contacts.filter((contact) =>
        Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(term.toLowerCase())
      );
      setSearchResults(filteredContacts);
    } else {
      setSearchResults(contacts);
    }
  };

  useEffect(() => {
    const fetchContacts = async () => {
      const retrievedContacts = await retrieveContacts();
      if (retrievedContacts) setContacts(retrievedContacts);
    };
    fetchContacts();
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={searchTerm ? searchResults : contacts}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/edit"
            element={
              <EditContact updateContactHandler={updateContactHandler} />
            }
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
