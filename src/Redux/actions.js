import axios from 'axios' ;
import { weatherAppAPI } from '../Config/ApiKey';
import { setItem } from '../Config/AppFunction';
import {DataLoading,DataSuccess,DayChange} from './actionType'


export const dataLoading=()=>{
    return {type:DataLoading};
}

export const dataSuccess=(payload)=>{
    return {type:DataSuccess,payload};
}


export const dateChange=(payload)=>{
    return {type:DayChange,payload} ;
}

export const weatherDataByLocation=()=>(dispatch)=>{
    const success=async(position)=>{
        try {
            let { latitude, longitude } = position.coords;
            dispatch(dataLoading());
            let weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherAppAPI}`);
            weatherData=weatherData.data
            let forcastData = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${weatherAppAPI}`);
            let detaileData = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weatherAppAPI}&units=metric`)
            forcastData = forcastData.data.daily;
            console.log(weatherData,forcastData,detaileData)
            let payload = { weatherData,forcastData,detaileData}
            dispatch(dataSuccess(payload));
            setItem("weather", payload)
        } catch (error) {
            console.log(error);
        }
   }
   const error=(error)=>{
    console.warn(`ERROR(${error.code}): ${error.message}`);
   }

   navigator.geolocation.getCurrentPosition(success,error);
}

export const weatherDataByCity=(city)=>async(dispatch)=>{
    try {
        dispatch(dataLoading())
        let weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAppAPI}`);
        weatherData = weatherData.data;
        let { lon, lat } = weatherData.coord;
        let forcastData = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${weatherAppAPI}`);
        forcastData = forcastData.data.daily;
        let detaileData = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAppAPI}&units=metric`)
        let payload = { weatherData, forcastData ,detaileData};
        dispatch(dataSuccess(payload));
        setItem("weather", payload);
    } catch (error) {
        console.error(`ERROR(${error.code}): ${error.message}`);
    }
}

export const syncData = (city) => async (dispatch) => {
    try {
        let weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAppAPI}`);
        weatherData = weatherData.data;
        let { lon, lat } = weatherData.coord;
        let forcastData = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${weatherAppAPI}`);
        forcastData = forcastData.data.daily;
        let payload = { weatherData, forcastData };
        dispatch(dataSuccess(payload));
        setItem("weather", payload);
        console.log("Data sync successfully");
    } catch (err) {
        console.log(err);
       console.log("City weather data doesn't exist");
    }
}