import Contact from "./Contact";
import Filter from '../../components/Filter';
import { useState } from "react";

const Contacts = ({contactsToShow, deleteContact}) => {
    const [contacts, setContacts] = useState(contactsToShow);
    return (
      <div className='w-full custom-box-shadow rounded-lg p-5 space-y-4'>
        <h2 className='text-lg font-semibold'>Contacts</h2>
        <Filter list={contactsToShow} setList = {setContacts} />
        { 
          contacts.map((contact) => (
            <Contact key = { contact._id } contact = { contact } deleteContact = { deleteContact } />
          ))
        }
      </div>
    )
}

export default Contacts;