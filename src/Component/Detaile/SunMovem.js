
import React from 'react'
import { dateFormat } from '../../Config/AppFunction'
import sunMoveme from '../../sunmovement.png'
const InnerBox={
    display: 'flex',
    flexDirection: 'column'
}

const SunMovementTime=({Data})=>{
    const sunrise=dateFormat(Data.data.city.sunrise).time
    const sunset=dateFormat(Data.data.city.sunset).time
    return (
        <div>
            <div style={{display:'flex','justifyContent':'space-between'}}>
              <div style={InnerBox}>
                <span><b>Sunrise</b></span>
                <span>{sunrise}</span>
              </div>
              <div style={InnerBox}>
              <span><b>Sunset</b></span>
                <span>{sunset}</span>
              </div>
            </div>
            <div>
             <img style={{width:'100%'}} src={sunMoveme}/>
            </div>
        </div>
    )
}

export default SunMovementTime