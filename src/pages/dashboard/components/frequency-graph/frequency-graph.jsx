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
    Legend,
  } from "chart.js";

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
    useEffect(() => {
        dashboardService.getGraphData()
        .then((resp) => {
            setLabels(resp?.result?.map(el => el._id));
            setDatasets([{data: resp?.result?.map(el => el.count)}]);
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
    };
    return (
        <>
            Frequency Graph
            <Line options={options} data={data} />
        </>
    )
}

export default FrequencyGraph;
