
import React from 'react';
import Paper from '@mui/material/Paper';
import { dateFormat } from '../../Config/AppFunction';
import CloudIcon from '@mui/icons-material/Cloud';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const InnerItem={
    margin: '0 0 0.25rem',
    fontWeight: '600'
}
const WeatherCard=({data,eventChange})=>{
    const { day,date } = dateFormat(data.dt);
    return (
           <Paper
                sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0.5rem 2rem',
                }} onClick={()=>{eventChange(date)}}
              >
              <h5 style={InnerItem}>{day}</h5>
              <span style={InnerItem}>{Math.round(data.temp.day)}<sup>o</sup> C</span>
              <span style={InnerItem}>{Math.round(data.temp.day)}<sup>o</sup> C</span>
              <div style={InnerItem}>{data.weather[0].main==='Clouds'?<CloudIcon/>:<WbSunnyIcon/>}</div>
              <h5 style={InnerItem}>{data.weather[0].main}</h5>
              </Paper>
    )
}

export default WeatherCard