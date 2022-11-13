import React, { useEffect, useState } from 'react'
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import RoomIcon from '@mui/icons-material/Room';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css'
import { useDispatch, useSelector } from 'react-redux';
import { weatherDataByCity } from '../../Redux/actions';

const SearchBar=()=>{
  const { weatherData } = useSelector((state) => state);
  const [city,setCity]=useState('');
  const dispatch=useDispatch()
  const handleChange=(e)=>{
    setCity(e.target.value)
  }
  const handleSumit=(e)=>{
    e.preventDefault()
    dispatch(weatherDataByCity(city))
    }
  
    useEffect(()=>{
      setCity(weatherData.name)
    },[])
    return (
        <>
          <Paper
      component="form"
      onSubmit={handleSumit}
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: '100%' }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <RoomIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search City By Name"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={handleChange}
        value={city}
      />
      <IconButton type="button" sx={{ p: "10px" }} onClick={handleSumit} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
        </>
    )
}

export default SearchBar