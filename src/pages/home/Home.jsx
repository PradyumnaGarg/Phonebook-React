import AddContactForm from './components/AddContactForm';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { Route, useRouteMatch } from 'react-router-dom';
import MyContacts from '../my-contacts/MyContacts';

const Home = ({propsForPersonForm}) => {
  let { path } = useRouteMatch();
  return (
    <div>
      <div className='flex'>
        <Sidebar />
        <div className='w-full'>
          <Header />
          <div className='p-8 space-y-8'>
            <Route path={`${path}/my-contacts`}><MyContacts /></Route>
            <Route exact path={`${path}`}>
                <AddContactForm props = {propsForPersonForm} />
            </Route>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
