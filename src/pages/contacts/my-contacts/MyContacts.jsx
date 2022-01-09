import Contacts from "./Contacts"
import { useEffect, useState } from "react";
import homeService from "../../home/home.service";
import contactService from "../contact.service";
import { useLoading } from '../../../contexts/loaderContext'
const Swal = require('sweetalert2')

const MyContacts = () => {
  const [contacts, setContacts] = useState([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(true)
    homeService.getAllContacts()
    .then(({ result }) => { setLoading(false); setContacts([...result]) })
    .catch((error) => {
        console.log(error.response.data.error);
        setLoading(false);
      });
  }, []);

  const deleteContact = async (contact) => {
    const deleteConfirm = await Swal.fire({
      icon: 'warning',
      title: 'Delete Contact',
      text: 'Are you sure?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      confirmButtonColor: '#ef4444'
    });
    if (deleteConfirm.isConfirmed) {
      try {
        setLoading(true);
        const status = await homeService.deleteContact(contact._id);
        setLoading(false);
        if (status) {
          const contactList = contacts.filter(({ _id }) => _id !== contact._id);
          setContacts([...contactList]);
        }
      } catch (error) {
        setLoading(false);
        console.log(error.response.data.error); 
      }
    }
  };
  
  const makeFavourite = (id, favourite) => {
    setLoading(true)
    console.log(favourite);
    contactService.updateContact({ _id: id, favourite })
    .then(() => {
        setLoading(false)
        const contactList = contacts.map((contact) => {
          if (contact._id === id) {
            return { ...contact, favourite };
          }
          return contact;
        });
        setContacts([...contactList]);
      })
      .catch(() => {
        setLoading(false)
      })
    }
    
  return (
    <div>
      <Contacts contactsToShow={contacts} deleteContact={deleteContact} makeFavourite={makeFavourite}></Contacts>
    </div>
  )
};

export default MyContacts;
