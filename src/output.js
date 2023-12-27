import React from "react";
import { Button } from "@material-ui/core";

import "./output.css";
const Output = ({ input, temp, desc, logo, setTemp }) => {
  return (
    <div className="result">
      <div className="outputbox">
        <h1>
          <strong>{input}</strong>
        </h1>
        <h1>{temp}°C</h1>
        <p>
          <i>
            <b>{desc}</b>
          </i>
        </p>
        <img src={logo} alt="weather icon" /> <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setTemp("");
          }}
        >
          Back
        </Button>
        <div className="design">
          <p>Designed by Dravid</p>
        </div>
      </div>
    </div>
  );
};

export default Output;
