import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import loginService from "../login.service";
import { useLoading } from '../../../contexts/loaderContext';
import { toast } from "react-toastify";
const LoginForm = () => {
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { setLoading } =  useLoading();
    const onSubmit = data => {
        setLoading(true);
        setTimeout(() => {
            loginService.loginUser(data)
            .then(({result: {token}}) => {
                setLoading(false);
                token && loginService.onLoginSucess(token);
                history.push('/home');
            })
            .catch((error) => {
                setLoading(false);
                toast.error(error?.response?.data?.error || "Something went wrong")
            });
        }, 3000)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 custom-box-shadow p-8 md:p-10 w-full md:w-3/4 lg:w-1/3 rounded-lg bg-white'>
            <h2 className='text-xl'>Login to phonebook</h2>
            <div className='flex flex-col'>
                <label className='block mb-2' htmlFor="email">Email</label>
                <input {...register('username', { required: true })} className='w-full border border-gray-300 rounded-lg' type="email" name="username" />
                { errors.username && <span className='text-red-500 text-sm'>Email is Required</span>}
            </div>
            <div>
                <label className='block mb-2' htmlFor="password">Password</label>
                <input {...register('password', { required: true })} className='w-full border border-gray-300 rounded-lg' type="password" name="password" id="password" />
                { errors.password && <span className='text-red-500 text-sm'>Password is Required</span>}
            </div>
            <button type='submit' className='w-full bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-lg'>Login</button>
            <Link to='/forgot-password' className="text-green-500 hover:text-green-600 underline">Forgot Password?</Link>
            <p>Already have an account? <Link className='text-green-500 hover:text-green-600 underline' to='/register'>Register</Link></p>
        </form>
    )
}

export default LoginForm;
