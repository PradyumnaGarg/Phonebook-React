import { useEffect, useState } from "react";
import Favourite from "./Favourite";
import dashboardService from "../../dashboard.service";
import { useLoading } from '../../../../contexts/loaderContext';

const Favourities = () => {
    const [favourites, setFavourites] = useState([]);
    const { setLoading } = useLoading();
    useEffect(() => {
        setLoading(true)
        dashboardService.getFavouriteContacts()
        .then((resp) => {
            setLoading(false)
            console.log(resp.result);
            setFavourites([...resp.result]);
        })
        .catch((error) => {
            setLoading(false)
            console.log(error);
        });
    }, [])
    return (
        <>
            <div className='p-8 rounded-2xl bg-green-600 bg-opacity-90 text-white'>
                <div className='flex mb-3'>
                    <span className='text-lg'>Favourite Contacts</span>
                    {
                        favourites.length > 0
                        ? (<span className='text-lg ml-auto'>{favourites.length} { favourites.length === 1 ? 'Contact' : 'Contacts' }</span>)
                        : ''
                    }
                </div>
                <div className='flex flex-wrap -m-4'>
                    {
                        favourites.length > 0 
                        ? favourites.map((favourite) => (
                            <div className='m-4' style={{ flex: '0 0 45%' }} key={favourite._id}>
                                <Favourite favourite = { favourite } />
                            </div>
                          ))
                        : (
                            <span className='m-4'>No Favourites yet!</span>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Favourities;