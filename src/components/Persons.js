const Persons = ({personsToShow, deletePerson}) => {
    console.log(personsToShow);
    return (
      <div className='w-full custom-box-shadow rounded-lg p-5 space-y-4'>
        <h2 className='text-lg font-semibold'>Contacts</h2>
        {personsToShow.map((person) => (
          <div className='border border-gray-300 rounded-lg px-4 py-2 flex items-center justify-between' key = {person._id}>
            <div className='mr-4 flex flex-col'>
              <p className='text-medium'>{person.name} </p>
              <p className=''>{person.number}</p>
            </div>
            <button className='px-8 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white' onClick = {() => {deletePerson(person)}}>Delete</button>
          </div>
        ))}
    </div>
    )
}

export default Persons;
