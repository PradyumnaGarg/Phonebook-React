import LoginForm from "./components/LoginForm";

const Login = () => {
    return (
        <div className='flex h-screen'>
            <div className='flex items-center justify-center p-5 custom-bg w-full'>
                <LoginForm></LoginForm>
            </div>
        </div>
    )
}

export default Login;