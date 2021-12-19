import { Link } from "react-router-dom";

const Contact = ({ contact, deleteContact, makeFavourite }) => {
    return (
        <div className='border border-gray-300 rounded-lg px-4 py-2 flex items-center'>
            <div className='mr-4 flex flex-col'>
                <p className='text-medium'>{contact.name} </p>
                <p className=''>{contact.number}</p>
            </div>
            <button className='px-8 py-2 ml-auto mr-2 border rounded-lg inline-flex'>
                {
                    contact.favourite
                        ? (
                            <span className='inline-flex' onClick={() => makeFavourite(contact._id, false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </span>)
                        : (
                            <span className='inline-flex' onClick={() => makeFavourite(contact._id, true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                            </span>
                        )
                }
            </button>
            <Link to={`/home/edit-contact/${contact._id}`} className='border rounded-lg px-8 py-2 mr-2'>Edit</Link>
            <button className='px-8 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white' onClick={() => { deleteContact(contact) }}>Delete</button>
        </div>
    )
};

export default Contact;
