import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItem } from '../../Config/AppFunction'
import { weatherDataByLocation,weatherDataByCity,dateChange } from '../../Redux/actions'
import Box from '@mui/material/Box';
import WeatherCard from './weatherCard';

const BoxStyle={
    padding: '10px',
    marginTop: '14px',
    borderRadius: '5px',
    backgroundColor: 'primary.dark',
    display:'flex',
    gap:'10px',
    overflowX:'scroll'
}

const Forecasting =()=>{
    const [select,setSelection]=useState(()=>{
        return {}
    })
    const { forcastData } = useSelector((state) => state);
    const dispatch=useDispatch();
    
    useEffect(()=>{
     let weather=getItem('weather')
     !weather && dispatch(weatherDataByLocation());
    },[])

    const DayChange=(data)=>{
       dispatch(dateChange(data))
        setSelection(data)
    }
    return (
       <Box  sx={BoxStyle}>
       {forcastData.map((e,i)=>{
      return <WeatherCard key={i} data={e} eventChange={DayChange}/>
      })}
 
       
       </Box>
    )
}


export default Forecasting
