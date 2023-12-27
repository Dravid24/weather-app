import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";
import axios from "axios";
import Output from "./output";

const App = () => {
  const [input, setInput] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [logo, setLogo] = useState("");
  const [isInvalidCity, setIsInvalidCity] = useState(false);

  const Findweather = async () => {
    const apiKey = "7859997fa63ac9b9b1ce2e15a991f2ce";
    const unit = "metric";
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      input +
      "&appid=" +
      apiKey +
      "&units=" +
      unit;
    let response;
    await axios
      .get(url)
      .then(async (res) => {
        response = res;
        setIsInvalidCity(false);
        const temp = await response?.data.main.temp;
        const desc = await response?.data.weather[0].description;
        const icon = await response?.data.weather[0].icon;
        const iconURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        setTemp(temp);
        setDesc(desc);
        setLogo(iconURL);
        setInput(input);
      })
      .catch((err) => setIsInvalidCity(true));
  };

  return (
    <div>
      {temp === "" ? (
        <Weather
          input={input}
          setInput={setInput}
          Findweather={Findweather}
          isInvalidCity={isInvalidCity}
        />
      ) : (
        <Output
          input={input}
          temp={temp}
          desc={desc}
          logo={logo}
          setTemp={setTemp}
        />
      )}
    </div>
  );
};

export default App;
