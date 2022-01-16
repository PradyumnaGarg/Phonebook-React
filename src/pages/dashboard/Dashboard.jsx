import Favourities from "./components/favourites/Favourites";
import FrequencyGraph from "./components/frequency-graph/frequency-graph";

const Dashboard = () => {
    return (
        <>
            <div className='flex p-4'>
                <div className='w-2/3'>
                    <Favourities/>
                    <FrequencyGraph />
                </div>
            </div>
        </>
    )
}

export default Dashboard;
