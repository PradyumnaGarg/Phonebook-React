import Filter from '../../components/Filter'
import homeService from '../home/home.service';
import { useState, useEffect } from 'react';
import Contacts from './components/Contacts';
import AddContactForm from './components/AddContactForm';

const Home = ({propsForPersonForm, filter, setFilter}) => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    homeService.getAllContacts()
    .then(({result}) => setContacts(result))
    .catch((error) => console.log(error.response.data.error));
  }, [])

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
  }

  return (
      <div className='p-4'>
      <div className='flex justify-center'>
        <div className='w-full lg:w-1/3 space-y-8'>
          <AddContactForm props = {propsForPersonForm} />
          <Filter filter = {filter} setFilter = {setFilter} />
          <Contacts contactsToShow = {contacts} deleteContact = {deleteContact} />
        </div>
      </div>
    </div>
  )
}

export default Home
