import React, { useState, useEffect } from 'react';
import phonebookService from './httpServices';
import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Header from './components/Header';

const App = () => {

  useEffect(() => {
    phonebookService.getAll().then((persons) => setPersons(persons));
  }, [])

  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filter, setFilter ] = useState('');
  const [ error, setError ] = useState({show: false, message: ''});
  
  const addPerson = (e) => {
    e.preventDefault();
    const personList = [...persons];
    const person = personList.find((person) => person.name === newName);
    setError({show: false, message: ''});
    if(person) {
      const confirmUpdate = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if (confirmUpdate) {
        updatePerson(person, personList);
      }
      return;
    }
    phonebookService.create({name: newName, number: newNumber})
    .then((person) => {
      console.log('Resp', person)
      setPersons(personList.concat(person))
    })
    .catch((error) => {
      setError({show: true, message: error.response.data.error});
    });
  }

  const updatePerson = (person, personList) => {
    phonebookService.update({...person, number: newNumber})
    .then((respPerson) => {
      personList = personList.map(ogperson => {
        if (ogperson._id === person._id) {
          ogperson = {...ogperson, number: newNumber};
        }
        return ogperson;
      });

      setPersons(personList);
    })
  }

  const deletePerson = (person) => {
    const deleteConfirm = window.confirm(`Delete ${person._id}`);

    if (deleteConfirm) {
      phonebookService.deleteEntry(person._id)
      .then((status) => {
        if (status === 204) {
          filterDeleted(person._id);
        }
      })
      .catch((error) => {
        console.log(error.response.data.error);
      })
    }
  }

  const filterDeleted = (id) => {
    const personList = persons.filter((person) => person._id !== id);
    setPersons([...personList]);
    personsToShow = [...personList];
  }
  
  let personsToShow = filter ? persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase())) : persons;
  
  const propsForPersonForm = {
    addPerson,
    newName,
    newNumber,
    setNewName,
    setNewNumber,
    error
  }
  return (
    <div>
      <Header />
      <div className='p-4'>
        <div className='flex justify-center'>
          <div className='w-full lg:w-1/3 space-y-8'>
            <PersonForm props = {propsForPersonForm} />
            <Filter filter = {filter} setFilter = {setFilter} />
            <Persons personsToShow = {personsToShow} deletePerson = {deletePerson} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;