import Contact from "./Contact";
import Filter from '../../../components/Filter';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contacts = ({contactsToShow, deleteContact}) => {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
      setContacts([...contactsToShow]);
    }, [contactsToShow])
    return (
      <div className='w-full custom-box-shadow rounded-lg p-5 space-y-4'>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-semibold'>Contacts</h2>
          <Link to='/home/add-new-contact' className='bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-lg'>Add New Contact</Link>
        </div>
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