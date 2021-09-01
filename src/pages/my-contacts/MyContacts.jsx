import Contacts from "./Contacts"
import { useEffect, useState } from "react";
import homeService from "../home/home.service";

const MyContacts = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
      homeService.getAllContacts()
      .then(({result}) => setContacts(result))
      .catch((error) => console.log(error.response.data.error));
    }, []);

    const deleteContact = async (contact) => {
        const deleteConfirm = window.confirm(`Delete ${contact._id}`);
    
        if (deleteConfirm) {
          try {
            const status = await homeService.deleteContact(contact._id);
            if (status) {
              const contactList = contacts.filter(({_id}) => _id !== contact._id);
              setContacts([...contactList]);
            }
          } catch(error) {
            console.log(error.response.data.error);
          }
        }
    };

    return (
        <div>
            <Contacts contactsToShow = {contacts} deleteContact = {deleteContact}></Contacts>
        </div>
    )
};

export default MyContacts;
