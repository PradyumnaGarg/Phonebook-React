import registerService from '../register.service';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => registerService.registerUser(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 custom-box-shadow p-10 w-full md:w-3/4 lg:w-1/3 rounded-lg bg-white'>
            <h2 className='text-xl'>Register to phonebook</h2>
            <div>
                <label className='block mb-2' htmlFor="email">Email</label>
                <input {...register('username', { required: true })} className='w-full border border-gray-300 rounded-lg' type="email" />
                { errors.username && <span className="text-red-500 text-sm"></span> }
            </div>
            <div>
                <label className='block mb-2' htmlFor="mobileNumber">Mobile Number</label>
                <input {...register('mobileNumber', { required: true })} className='w-full border border-gray-300 rounded-lg' type="number" name="mobileNumber" id="mobileNumber" />
                { errors.mobileNumber && <span className="text-red-500 text-sm"></span> }
            </div>
            <div>
                <label className='block mb-2' htmlFor="password">Password</label>
                <input {...register('password', { required: true })} className='w-full border border-gray-300 rounded-lg' type="password" name="password" id="password" />
                { errors.password && <span className="text-red-500 text-sm"></span> }
            </div>
            <button type='submit' className='w-full bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-lg'>Register</button>
            <p>Already have an account? <Link className='text-green-500 hover:text-green-600 underline' to='/login'>Login</Link></p>
        </form>
    )
}

export default RegisterForm;
