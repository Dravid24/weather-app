import React from "react";
import Input from "@material-ui/core/Input";
import { Button } from "@material-ui/core";
const Weather = ({ input, setInput, Findweather, isInvalidCity }) => {
  const handelChange = (event) => {
    setInput(event.target.value);
  };

  const handelClick = (event) => {
    event.preventDefault();
    Findweather();
  };
  return (
    <div className="body">
      <div className="inputbox">
        <div className="field">
          <h1>Weather App</h1>
          <p>Powered by</p>
          <img src="./logo.png" alt="Logo" width="70" />
          <form>
            <Input
              placeholder="Enter the city name"
              onChange={handelChange}
              value={input}
            />{" "}
            {isInvalidCity && <p style={{ color: "red" }}>City not found</p>}
            <br />
            <Button
              variant="contained"
              color="primary"
              type="Submit"
              onClick={handelClick}
            >
              Search
            </Button>
          </form>
          <br />
          <div className="design">
            <p>Copyright &copy; 2020 Dravid. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;
