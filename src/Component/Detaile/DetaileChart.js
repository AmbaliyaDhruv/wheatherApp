import React from 'react' ;
import { useSelector } from 'react-redux';
import AirDetaile from './AirDetaile';
import SunMovementTime from './SunMovem';
import TemperatureGraph from './temperatureGraph';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
const DetaileChart=()=>{
    const { isLoading,dayChange,detaileData} = useSelector((state) => state);
    return isLoading ? (
    <Box sx={{ width:'100%',marginTop:'10px'}}>
        <Skeleton animation="wave"  sx={{height:'340px'}}/>
        <Skeleton animation="wave"  sx={{height:'100px'}} />
        <Skeleton animation="wave"  sx={{height:'200px'}}/>
        
    </Box>
  ): (
        <>
        {dayChange && detaileData ?<><TemperatureGraph Data={dayChange}/>
           <AirDetaile Data={dayChange[0]}/>
           <SunMovementTime Data={detaileData} /></>:""}
         
        </>
    )
}


export default DetaileChart