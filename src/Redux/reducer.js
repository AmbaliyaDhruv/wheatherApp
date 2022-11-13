import { dateFormat, getItem } from '../Config/AppFunction';
import {DataLoading,DataSuccess,DayChange} from './actionType'

const initState = {
    isLoading: getItem("weather") ? false : true,
    weatherData: getItem("weather") ? getItem("weather").weatherData : {},
    forcastData: getItem("weather") ? getItem("weather").forcastData : [],
    detaileData: getItem("weather") ? getItem("weather").detaileData : {},
    dayChange:checkData(),
    isError: false
}

function checkData(payload){
    let res;
    let date;
    if(getItem("weather")){
      res=[]
      if(payload){
        date=payload
      }else{
        date=dateFormat(getItem("weather").weatherData.dt).date
      }
       getItem("weather").detaileData.data.list.map((e)=>{
        let check=dateFormat(e.dt).date
        if(check===date){
            res.push({ time: e.dt_txt, temp: e.main.temp, press: e.main.pressure, humid: e.main.humidity})
        }
      })
      return res

    }else{
        return res=[ {
            "time": "2022-11-14 21:00:00",
            "temp": 22.15,
            "press": 1014,
            "humid": 36
        },
        {
            "time": "2022-11-15 00:00:00",
            "temp": 21.62,
            "press": 1014,
            "humid": 38
        },
        {
            "time": "2022-11-15 03:00:00",
            "temp": 23.19,
            "press": 1016,
            "humid": 34
        }]
    }
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case DataLoading:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case DataSuccess:
            return {
                ...state,
                isLoading: false,
                isError: false,
                weatherData: payload.weatherData,
                forcastData: payload.forcastData,
                detaileData:payload.detaileData
            };
        case DayChange:
            return {
                ...state,
                dayChange:checkData(payload)
            } 
        default:
            return state;
    }
}