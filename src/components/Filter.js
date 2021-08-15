const Filter = ({filter, setFilter}) => {
    return (
     <div className='mb-8 w-full custom-box-shadow rounded-lg p-5'>
        <h2 className='text-lg font-semibold mb-4'>Filter</h2>
        <label htmlFor='filter-name' className='block mb-2'>Name</label>
        <input 
          id='filter-name'
          className='border-gray-300 border rounded-lg p-2 w-full'
          placeholder='Filter as you type'
          type='text'
          value = {filter}
          onChange = {(e) => setFilter(e.target.value)}  />
     </div>
    )
}

export default Filter;