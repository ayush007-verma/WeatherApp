import React from "react";

export const LeftSection = (props) => {
  let c = 0;
  return (
    <>
      <p
        style={{
          color: "red",
          height: "25vh",
          fontSize: "1.5rem",
          border: "5px solid black",
        }}
      >
        Increase C To traverse through weatherArray weatherArray
        =["sunny","cloudy","windy","rainy","stormy"]
      </p>
      <button
        onClick={() => {
          if (c === 4) {
            alert(" weatherArray IndexOutOfBound ");
          } else {
            c += 1;
            console.log(c, props.weather[c]);
            return <LeftSection weather={props.weather} c={c}/>
          }
        }}
        style={{
          height: "60px",
          width: "90px",
          marginTop: "7vh",
          backgroundColor: "inherit",
          border: "3px solid red",
        }}
      >
        C++
      </button>
      <div style={{display: "block"}}>
      <h1>{props.weather[0]}</h1>
      </div>
    </>
  );
};
