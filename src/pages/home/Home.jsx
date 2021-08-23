import Filter from '../../components/Filter'
import PersonForm from '../../components/PersonForm'
import Persons from '../../components/Persons'

const Home = ({propsForPersonForm, filter, setFilter, personsToShow, deletePerson}) => {
    return (
        <div className='p-4'>
        <div className='flex justify-center'>
          <div className='w-full lg:w-1/3 space-y-8'>
            <PersonForm props = {propsForPersonForm} />
            <Filter filter = {filter} setFilter = {setFilter} />
            <Persons personsToShow = {personsToShow} deletePerson = {deletePerson} />
          </div>
        </div>
      </div>
    )
}

export default Home
