import Favourite from "./Favourite";

const Favourities = () => {
    return (
        <>
            <div className='p-8 rounded-2xl bg-green-600 bg-opacity-90 text-white'>
                <h1 className='text-lg mb-3'>Top 3 Favourites</h1>
                <div className='flex justify-between'>
                    <Favourite />
                </div>  
            </div>
        </>
    )
}

export default Favourities;