import Favourities from "./components/favourites/Favourites";

const Dashboard = () => {
    return (
        <>
            <div className='flex'>
                <div className='w-2/3'>
                    <Favourities/>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
