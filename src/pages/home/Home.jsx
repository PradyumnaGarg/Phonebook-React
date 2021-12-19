import AddContactForm from '../contacts/add-contact/AddContactForm';
import Sidebar from '../../components/Sidebar';
import { Route, useRouteMatch } from 'react-router-dom';
import MyContacts from '../contacts/my-contacts/MyContacts';
import Dashboard from '../dashboard/Dashboard';

const Home = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <div className='flex'>
        <div className='w-1/5'>
          <Sidebar />
        </div>
        <div className='w-4/5 p-4'>
            <Route exact path={`${path}`}><Dashboard /></Route>
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
