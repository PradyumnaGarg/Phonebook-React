import { useState } from "react";

const Filter = ({list, setList}) => {
  const [filter, setFilter] = useState('');
  const filterList = (text) => {
    setFilter(text);
    const filteredList = text ? list.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase())) : list;
    setList(filteredList);
  }
    return (
        <input 
          id='filter-name'
          className='border-gray-300 border rounded-lg p-2 w-full'
          placeholder='Search as you type'
          type='text'
          value = {filter}
          onChange = {(e) => filterList(e.target.value)}  />
    )
}

export default Filter;