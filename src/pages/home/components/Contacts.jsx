import Contact from "./Contact";

const Contacts = ({contactsToShow, deleteContact}) => {
    return (
      <div className='w-full custom-box-shadow rounded-lg p-5 space-y-4'>
        <h2 className='text-lg font-semibold'>Contacts</h2>
        { 
          contactsToShow.map((contact) => (
            <Contact key = { contact._id } contact = { contact } deleteContact = { deleteContact } />
          ))
        }
      </div>
    )
}

export default Contacts;