import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import authServices from '../../../services/authServices';
import { useLoading } from '../../../contexts/loaderContext';

const ForgotPasswordForm = () => {

    const { handleSubmit, register, formState: { errors }, reset } = useForm();
    const { setLoading } =  useLoading();
    const onSubmit = data => {
        setLoading(true);
        authServices.forgotPassword(data)
        .then((resp) => {
            setLoading(false);
            toast.success(resp.result.message);
            reset();
        })
        .catch((error) => {
            setLoading(false);
            toast.error(error?.error?.message || 'Internal server error');
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 custom-box-shadow p-8 md:p-10 w-full md:w-3/4 lg:w-1/3 rounded-lg bg-white">
            <h2 className='text-xl'>Forgot Password</h2>
            <p className="text-gray-500">A password reset link will be shared on account's email, please enter your email</p>
            <div className='flex flex-col'>
                <label className='block mb-2' htmlFor="email">Email</label>
                <input {...register('username', { required: 'Email is required' })} className='w-full border border-gray-300 rounded-lg' type="email" name="username" />
                { errors.username && <span className='text-red-500 text-sm'>Email is Required</span>}
            </div>
            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-lg">Send reset link</button>
        </form>
    )
}

export default ForgotPasswordForm;
 