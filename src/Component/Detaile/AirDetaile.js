import React from 'react' ;

const OuterBox={
    display: 'flex',
    gap:'10px',
    marginBottom: '3rem',
    textAlign: 'left'
}

const InnerBox={
    background: '#f3fbff',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 0.75rem'
}

const AirDetaile =({Data})=>{

    return (
        <div style={OuterBox}>
            <div style={InnerBox}>
             <span><b>Pressure</b></span>
             <span>{Data ? Data.press : '1016'} hpa</span>
            </div>
            <div style={InnerBox}>
            <span><b>Humidity</b></span>
             <span>{Data ? Data.humid : '14'} %</span>
            </div>
        </div>
    )
}

export default AirDetaile