import { Link } from "react-router-dom";

const Contact = ({contact, deleteContact}) => {
    return (
        <div className='border border-gray-300 rounded-lg px-4 py-2 flex items-center'>
            <div className='mr-4 flex flex-col'>
                <p className='text-medium'>{contact.name} </p>
                <p className=''>{contact.number}</p>
            </div>
            <Link to={`/home/edit-contact/${contact._id}`} className='ml-auto border rounded-lg px-8 py-2 mr-2'>Edit</Link>
            <button className='px-8 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white' onClick = {() => {deleteContact(contact)}}>Delete</button>
        </div>
    )
};

export default Contact;
