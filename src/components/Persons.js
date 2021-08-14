const Persons = ({personsToShow, deletePerson}) => {
    console.log(personsToShow);
    return (
      <div>
      {personsToShow.map((person) => (
        <div key = {person._id}>
          <p >{person.name} {person.number}</p>
          <button onClick = {() => {deletePerson(person)}}>Delete</button>
        </div>
      ))}
    </div>
    )
}

export default Persons;
