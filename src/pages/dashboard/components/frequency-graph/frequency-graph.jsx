import { useState, useEffect } from 'react';
import dashboardService from '../../dashboard.service';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
  } from "chart.js";
import moment from 'moment';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
  );

const FrequencyGraph = () => {
    const [datasets, setDatasets] = useState([]);
    const [labels, setLabels] = useState([]);
    const payload = {
        startDate: moment().subtract(7, 'days').format('YYYY-MM-DD'),
        stopDate: moment().format('YYYY-MM-DD'),
    }
    useEffect(() => {
        dashboardService.getGraphData(payload)
        .then((resp) => {
            setLabels(resp?.result?.map(el => el._id));
            setDatasets([{data: resp?.result?.map(el => el.count), borderColor: 'rgb(0, 0, 0)',}]);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])

    const data = {
        labels,
        datasets,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
    }

    const options = {
        responsive: true,
        scales: {
            y: {
                ticks: {
                  color: "black",
                  stepSize: 1,
                  beginAtZero: true,
                },
                grid: {
                    color: 'black'
                },
                title: {
                    display: true,
                    text: 'No. of contacts',
                    color: 'black'
                  }
            },
            x: {
                ticks: {
                  color: "black",
                  stepSize: 1,
                  beginAtZero: true
                },
                grid: {
                    color: 'black'
                },
                title: {
                    display: true,
                    text: 'Dates',
                    color: 'black'
                  }
            },
        }
    };
    return (
        <>
            <div className='p-8 rounded-2xl bg-green-200 bg-opacity-90 my-4 shadow-xl'>
                <h2 className='text-lg mb-4'>Frequency Graph</h2>
                <Line options={options} data={data} />
            </div>
        </>
    )
}

export default FrequencyGraph;
