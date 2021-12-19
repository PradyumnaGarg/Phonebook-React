const Favourite = ({favourite}) => {
    console.log(favourite);
    return (
        <>
            <div className='p-3 flex bg-gray-200 rounded-2xl text-black'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
                <div className='flex flex-col'>
                    <div>{favourite.name}</div>
                    <div>{favourite.number}</div>
                    <div>View</div>
                </div>
            </div>
        </>
    )
}

export default Favourite;