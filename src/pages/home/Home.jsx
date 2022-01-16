import AddContactForm from '../contacts/add-contact/AddContactForm';
import Sidebar from '../../components/Sidebar';
import { Route, useRouteMatch } from 'react-router-dom';
import MyContacts from '../contacts/my-contacts/MyContacts';
import Dashboard from '../dashboard/Dashboard';
import Profile from "../profile/profile";

const Home = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <div className='flex max-h-screen'>
        <div className='w-1/5'>
          <Sidebar />
        </div>
        <div className='w-4/5 flex-1 max-h-screen overflow-y-auto '>
            <Route exact path={`${path}`}><Dashboard /></Route>
            <Route exact path={`${path}/my-profile`} ><Profile/></Route>
            <Route exact path={`${path}/dashboard`}><Dashboard /></Route>
            <Route exact path={`${path}/my-contacts`}><MyContacts /></Route>
            <Route exact path={`${path}/add-new-contact`}><AddContactForm /></Route>
            <Route exact path={`${path}/edit-contact/:id`}><AddContactForm /></Route>
        </div>
      </div>
    </div>
  )
}

export default Home
