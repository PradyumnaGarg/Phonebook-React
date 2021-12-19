import Contacts from "./Contacts"
import { useEffect, useState } from "react";
import homeService from "../../home/home.service";
import contactService from "../contact.service";

const MyContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    homeService.getAllContacts()
      .then(({ result }) => { setContacts([...result]) })
      .catch((error) => console.log(error.response.data.error));
  }, []);

  const deleteContact = async (contact) => {
    const deleteConfirm = window.confirm(`Delete ${contact._id}`);

    if (deleteConfirm) {
      try {
        const status = await homeService.deleteContact(contact._id);
        if (status) {
          const contactList = contacts.filter(({ _id }) => _id !== contact._id);
          setContacts([...contactList]);
        }
      } catch (error) {
        console.log(error.response.data.error);
      }
    }
  };

  const makeFavourite = (id, favourite) => {
    console.log(favourite);
    contactService.updateContact({ _id: id, favourite })
      .then(() => {
        const contactList = contacts.map((contact) => {
          if (contact._id === id) {
            return { ...contact, favourite };
          }
          return contact;
        });
        setContacts([...contactList]);
      })
      .catch()
  }

  return (
    <div>
      <Contacts contactsToShow={contacts} deleteContact={deleteContact} makeFavourite={makeFavourite}></Contacts>
    </div>
  )
};

export default MyContacts;
