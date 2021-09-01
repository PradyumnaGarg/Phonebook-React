const Contact = ({contact, deleteContact}) => {
    return (
        <div className='border border-gray-300 rounded-lg px-4 py-2 flex items-center justify-between'>
            <div className='mr-4 flex flex-col'>
                <p className='text-medium'>{contact.name} </p>
                <p className=''>{contact.number}</p>
            </div>
            <button className='px-8 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white' onClick = {() => {deleteContact(contact)}}>Delete</button>
        </div>
    )
};

export default Contact;
