import React, { useEffect, useState } from "react";
import '../css/chartbox.css';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { Api } from "@mui/icons-material";

function ChartBox() {
    Chart.register(CategoryScale);


    const [datasets, setDatasets] = useState([]);
    const [labels, setLabels] = useState([]);


    useEffect(() => {

        // Api.asffsafsa().then(res => {
        //     setLabels(res.data.labels)
        //     setDatasets(res.data.data)
        // })
        
        setLabels(['Jun', 'Jul', 'Aug'])

        setDatasets([
            {
                label: 'a',
                data: [5, 6, 7],
            },
            {
                label: 'b',
                data: [3, 2, 1],
            },
        ])
    }, [])

    return (
        <>
            <Bar
                datasetIdKey='id'
                data={{
                    labels: labels,
                    datasets: datasets
                }}
            />
        </>
    )

}

export default ChartBox;