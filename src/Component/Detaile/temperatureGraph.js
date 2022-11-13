
import React, { useEffect, useState } from "react";
import ApexCharts from 'react-apexcharts'

const TemperatureGraph=({Data})=>{
    const [state,setState]=useState({
         
        series: [{
            name: 'temperature',
            data: [31]
          }],
          options: {
            chart: {
              height: 350,
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          },
    })

    const getTemp=()=>{
        let res=[]
        Data.map((e)=>{
            res.push(e.temp)
        })
        return res
    }

    useEffect(()=>{
     setState(prevState=>{
        return {
            ...prevState,
            series:[
                {
                    name: 'temperature in celsius',
                    data:  getTemp()  
                }
            ],

        }
     })
    },[Data])


    return (
        <div id="chart" style={{marginTop:'20px'}}>
        <ApexCharts options={state.options} series={state.series} type="area" height={350} />
      </div>
    )
}



export default TemperatureGraph