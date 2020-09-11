import React from 'react'
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
const Weather = ({input,setInput, Findweather}) => {

const handelChange = (event) => {
    setInput(event.target.value)
}
//console.log(input); 

const handelClick =(event) =>{
    event.preventDefault();
    Findweather();  
}
    return (
<div className="body">
    <div className="inputbox">
    <div className="field">
        <h1>Weather App</h1>
        <p>Powered by</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Logo" />
        <form>
            <Input placeholder="Enter the city name" onChange={handelChange} value={input} /> <br />
            <Button variant="contained" color="primary" type="Submit" onClick={handelClick}>Search</Button>
        </form><br />
        <div className="design"><p>Copyright &copy; 2020 Dravid. All Rights Reserved</p></div>
    </div>
  </div>
</div>
    )
}
export default Weather; 