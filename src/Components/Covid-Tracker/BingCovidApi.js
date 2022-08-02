import React from "react";
import "./Covid1.css"

export const BingCovidApi = () => {
  return (
    <div
      style={{
        margin: 0,
        // padding:"1vw",
        color: "white",
        border: "solid red",
        width: "95vw",
      }}
    >
      <h1
        className="text-center heading"
        style={{
          fontSize: "5rem",
        }}
      >
        Covid Tracker
      </h1>
      <h4 className="text-center heading1" style={{fontSize:"2.5rem"}}>
        Traverse to various locations worldwide to track covid19 spread .
      </h4>
      <h4 className="text-center heading1" style={{fontSize:"2.5rem"}}>
        Along-Side Get Graphical Representation of Confirmed Deaths And
        Vaccinated Cases
      </h4>
      <h4 className="text-center heading1" style={{fontSize:"2.5rem"}}>
        P.S:- (Pls Reload If Map and Graph Not Visible)
      </h4>

      <div
        style={{
          display: "flex",
          // height: "80vh"
          width: "95vw",
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            margin: 0,
            padding: 0,
            border: "solid blue",
          }}
          className="map"
          class="bingwidget"
          data-type="covid19_map"
          data-market="en-IN"
          data-language="en-IN"
          data-location-id="/India/Maharastra"
        ></div>
        <div
          style={{
            margin: 0,
            padding: 0,
            height: "670px",
            border: "solid blue",
          }}
          className="trends"
          class="bingwidget"
          data-type="covid19_stats_trends"
          data-market="en-us"
          data-language="en-us"
          data-location-id="/India/Maharastra"
        ></div>
      </div>
    </div>
  );
};
