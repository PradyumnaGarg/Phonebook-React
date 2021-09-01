import { useForm } from "react-hook-form";
import homeService from "../home.service";

const AddContactForm = ({props}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        homeService.saveNewContact(data)
        .then(savedContact => {
            console.log(savedContact);
        })
        .catch(error => console.log(error.response.data.error))
    };

    return (
      <div className='w-1/2'>
        <div className='custom-box-shadow p-5 rounded-lg'>

        <form className='flex flex-col space-y-4' onSubmit={handleSubmit(onSubmit)}>
          <h2 className='text-lg font-medium'>Add new contact</h2>
          <p className='text-red-500' hidden={!props.error.show}>Error: {props.error.message}</p>
          <div>
            <label htmlFor='name' className='block mb-2'>Name</label>
            <input
              id="name"
              className='w-full border border-gray-300 rounded-lg'
              type='text'
              {...register('name', { required: true })} />
              { errors.name && <span className='text-red-500 mt-1'>Name is required</span> }
          </div>
          <div>
            <label htmlFor='number' className='block mb-2'>Contact number</label>
            <input 
              id="number"
              className='w-full border border-gray-300 rounded-lg'
              type='number'
              {...register('number', { required: true })} />
              { errors.name && <span className='text-red-500 mt-1'>Name is required</span> }
          </div>
          <button className='bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-lg' type='submit'>Add</button>
        </form>
      </div>
     </div>
    )
}

export default AddContactForm;