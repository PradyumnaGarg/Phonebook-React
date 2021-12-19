import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import homeService from "../../home/home.service";
import contactService from "../contact.service";

const AddContactForm = () => {
    let { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [ response, setResponse ] = useState({show: false, error: false, message: ''});
    const [ update, setUpdate ] = useState(false);
    const onSubmit = (data) => {
      if (update) {
        updateContact(data);
      } else {
        addNewContact(data);
      }
    };

    const updateContact = (data) => {
      contactService.updateContact({...data, _id: id})
      .then(savedContact => {
        console.log(savedContact);
        setResponse({show: true, error: false, message: 'Contact Updated Successfully'});
        setTimeout(() => setResponse({show: false, error: false, message: ''}), 2000)
      })
      .catch(error => {
        console.log(error.response.data.error);
        setResponse({show: false, error: true, message: error?.response?.data?.error || 'Error'});
        setTimeout(() => setResponse({show: false, error: false, message: ''}), 2000)
      });
    };

    const addNewContact = (data) => {
      homeService.saveNewContact(data)
        .then(savedContact => {
            console.log(savedContact);
            setResponse({show: true, error: false, message: 'Contact Added Successfully'});
            setTimeout(() => setResponse({show: false, error: false, message: ''}), 2000)
          })
          .catch(error => {
            console.log(error.response.data.error);
            setResponse({show: false, error: true, message: error?.response?.data?.error || 'Error'});
            setTimeout(() => setResponse({show: false, error: false, message: ''}), 2000)
        });
    }

    const loadContactInfo = () => {
      if (id) {
        contactService.getContactInfo(id)
        .then((resp) => {
          setUpdate(true);
          reset({
            name: resp.result.name,
            number: resp.result.number
          });
        })
        .catch((error) => {
          console.log(error);
        })
      }
    }

    useEffect(loadContactInfo, [id, reset]);

    return (
      <div className='w-1/2'>
        <div className='custom-box-shadow p-5 rounded-lg'>

        <form className='flex flex-col space-y-4' onSubmit={handleSubmit(onSubmit)}>
          <h2 className='text-lg font-medium'>{ update ? 'Update' : 'Add new' } contact</h2>
          <p className='text-red-500' hidden={!response.error}>Error: {response.message}</p>
          <p className='text-green-500' hidden={!response.show}>{response.message}</p>
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
          <button className='bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-lg' type='submit'>{ update ? 'Update' : 'Add'}</button>
        </form>
      </div>
     </div>
    )
}

export default AddContactForm;
