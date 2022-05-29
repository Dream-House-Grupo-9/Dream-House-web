import React, { useEffect, useState } from "react";
import '../css/chartbox.css';
import { Bar, Line } from 'react-chartjs-2';
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
                label: 'Cadastros de anuncios',
                data: [5, 6, 7],
                borderColor: "#E240D2"
            },
            {
                label: 'Clientes',
                data: [3, 2, 1],
                borderColor: "#181818"
            },
        ])
    }, [])

    return (
        <>
            <Line
                datasetIdKey='id'
                data={{
                    labels: labels,
                    datasets: datasets
                }}
                className="Chart"
            />
        </>
    )

}

export default ChartBox;