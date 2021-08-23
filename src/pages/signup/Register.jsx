import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className='flex h-screen'>
            <div className='flex items-center justify-center p-5 custom-bg w-full'>
                <form className='flex flex-col space-y-4 custom-box-shadow p-10 w-full md:w-3/4 lg:w-1/3 rounded-lg bg-white'>
                    <h2 className='text-xl'>Register to phonebook</h2>
                    <div>
                        <label className='block mb-2' htmlFor="email">Email</label>
                        <input className='w-full border border-gray-300 rounded-lg' type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label className='block mb-2' htmlFor="mobileNumber">Mobile Number</label>
                        <input className='w-full border border-gray-300 rounded-lg' type="number" name="mobileNumber" id="mobileNumber" />
                    </div>
                    <div>
                        <label className='block mb-2' htmlFor="password">Password</label>
                        <input className='w-full border border-gray-300 rounded-lg' type="password" name="password" id="password" />
                    </div>
                    <button className='w-full bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-lg'>Register</button>
                    <p>Already have an account? <Link className='text-green-500 hover:text-green-600 underline' to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register;
