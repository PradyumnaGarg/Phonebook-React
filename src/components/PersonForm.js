const PersonForm = ({props}) => {
    return (
      <div className='custom-box-shadow p-5 rounded-lg'>
        
        <form className='flex flex-col space-y-4' onSubmit={props.addPerson}>
          <h2 className='text-lg font-semibold'>Add new contact</h2>
          <p className='text-red-500' hidden={!props.error.show}>Error: {props.error.message}</p>
          <div>
            <label htmlFor='name' className='block mb-2'>Name</label>
            <input 
              id='name'
              className='w-full border border-gray-300 rounded-lg'
              type='text'
              value = {props.newName}
              onChange = {(e) => props.setNewName(e.target.value)} />
          </div>
          <div>
            <label htmlFor='number' className='block mb-2'>Contact number</label>
            <input 
              id='number'
              className='w-full border border-gray-300 rounded-lg'
              name='contact-number'
              type='number'
              value = {props.newNumber}
              onChange = {(e) => props.setNewNumber(e.target.value)} />
          </div>
          <button className='bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-lg' type='submit'>Add</button>
        </form>
      </div>
    )
}

export default PersonForm;
