const Filter = ({filter, setFilter}) => {
    return (
     <div>
       filter shown with <input value = {filter} onChange = {(e) => setFilter(e.target.value)}  />
     </div>
    )
}

export default Filter;