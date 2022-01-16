const AuthContainer = ({children}) => {
    return (
        <div className='flex h-screen'>
            <div className='flex items-center justify-center p-5 custom-bg w-full'>
                {children}
            </div>
        </div>
    )
}

export default AuthContainer;
