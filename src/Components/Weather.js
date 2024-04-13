import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Weather = () => {
    const Apikey='312c63d8a43a47e144539c306a7239f5'
    const url=`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${Apikey}`
    const[data,setData]=useState(null)
    const getData=()=>{
        axios.get(url)
        .then(function(res){
            console.log(res)
            setData(res.data)

        })
        .catch(function(error){
            console.log(error)
        })
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <div className='weather'>
            {
                data&&
                <>
                <h1>{data.name}</h1>
                
                <div className='nhiet_do'>
                    
                <div className='detail_nhiet_do'>
                <div><i className='fa-solid fa-location-dot'>{data.name}</i></div>
                <div><i className='fa-solid fa-location-dot'>{data.name}</i></div>
                <h2>{(0.6*(data.main.temp-32)).toFixed(2)}C |{data.main.temp}F</h2>
                
                <p>Thoi tiet:{data.weather[0].main}</p>
                <p>temp:{data.main.temp}</p>
                <p>Quoc gia:{data.sys.country}</p>
                </div>
                
                <img src={`https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`} />
                </div>
                
                
                </>
            }
        </div>
    );
}

export default Weather;
