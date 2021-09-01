import { Link, useRouteMatch } from "react-router-dom";

const Sidebar = () => {
    let { url } = useRouteMatch();
    return (
        <div className='min-h-screen bg-green-600 text-white w-1/6'>
            <Link to='/home'><p className='text-3xl p-4'>phonebook</p></Link>
            <div className='text-lg p-4'>Dashboard</div>
            <Link to={`${url}/my-contacts`} ><div className='text-lg p-4'>My Contacts</div></Link>
        </div>
    )
}

export default Sidebar;
