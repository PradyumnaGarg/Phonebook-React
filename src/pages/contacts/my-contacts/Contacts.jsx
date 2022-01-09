import Contact from "./Contact";
import Filter from '../../../components/Filter';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";

const headers = [
  { label: "Name", key: "name" },
  { label: "Number", key: "number" }
];

const Contacts = ({contactsToShow, deleteContact, makeFavourite}) => {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
      setContacts([...contactsToShow]);
    }, [contactsToShow])
    return (
      <div className='w-full custom-box-shadow rounded-lg p-5 space-y-4'>
        <div className='flex items-center'>
          <h2 className='text-lg font-semibold'>Contacts</h2>
          <CSVLink data={contacts} className="bg-green-500 text-white px-8 py-2 rounded-lg ml-auto mr-2" headers={headers}>Export CSV</CSVLink>
          <Link to='/home/add-new-contact' className='bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-lg'>Add New Contact</Link>
        </div>
        <Filter list={contactsToShow} setList = {setContacts} />
        { 
          contacts.map((contact) => (
            <Contact key = { contact._id } contact = { contact } deleteContact = { deleteContact } makeFavourite = { makeFavourite } />
          ))
        }
      </div>
    )
}

export default Contacts;