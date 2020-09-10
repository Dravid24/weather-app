import React, { useState } from 'react';
import './App.css';
import Weather from './input';
import axios from "axios";
import Output from './output';


const App= () => {
  const [input,setInput]=useState("")
  const [temp,setTemp]=useState("")
  const [desc,setDesc]=useState("")
  const [logo,setLogo]=useState("")

  const Findweather = async () =>{
    const apiKey="21e7ebc537f6717042f447d45d0ec393";
    const unit="metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ input +"&appid=" + apiKey + "&units=" + unit;
    const response = await axios.get(url);
    const temp= await response.data.main.temp;
    const desc= await response.data.weather[0].description;
    const icon=await response.data.weather[0].icon;
    const iconURL="https://openweathermap.org/img/wn/" + icon + "@2x.png"
    //console.log(temprature , description , iconURL);
    setTemp(temp);
    setDesc(desc);
    setLogo(iconURL);
  
  }

  return (
    <div>
      {temp === "" ? (
      <Weather input={input} setInput={setInput} Findweather={Findweather}/>) :
      (<Output input={input} temp={temp} desc={desc} logo={logo} setTemp={setTemp} />)
  }
    </div>
  );
}

export default App;
