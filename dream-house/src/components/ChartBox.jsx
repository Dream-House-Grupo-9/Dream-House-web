import React from "react";
import '../css/chartbox.css';
import {Bar} from 'react-chartjs-2';

function ChartBox(){
    return(
        <>
         
               <Bar 
                data={{
                    labels: ['Red', 'Blue'],
                    datasets:[{
                        label: '# of votes',
                        data:[12,19],
                        
                    }]
                }}
                height={200}
                width={400}
                options={{
                    maintainAspectRatio: false,
                }}
               />
           
        </>
    );
}

export default ChartBox;