import React from "react";
import "./CovidComponent.css";
import { TestUpperSection } from "./TestUpperSection";
import GlobalSection from "./GlobalSection";
import DefaultSection from "./DefaultSection";
import { BingCovidApi } from "./BingCovidApi";
import { Carasuel } from "./Carasuel";
import Covid from "./Covid19";
import CountryCases from "./CountryCases";
import Cases from "./CityCases";

export const CovidComponent = () => {
  return (
    <div className="main">
      <div
        style={{
          display: "block",
          // marginLeft: "1.5vw"
          // border: "solid black"
        }}
      >
        <TestUpperSection />
      </div>
      {/* <div style={{display: "block", height: "10vw",width: "100vw" ,border:"solid black"}}></div> */}
      <div
        style={{
          display: "block",
          // margin: "2vw",
        }}
      >
        <div
          className="table-success"
          style={{
            width: "95vw",
            height: "73vh",
            border: "solid blue",
            // marginLeft: "1.5vw"
          }}
        >
          <GlobalSection />
          <DefaultSection />
        </div>
        <div>
          <div
            style={{
              display: "flex",
              // width: "460px"
            }}
          >
            <BingCovidApi />
          </div>
          <div
            className="pic-space"
            style={{
              marginLeft: "0.15vw",
              display: "flex",
              width: "94.8vw",
              height: "75vh",
              position: "absolute",
              border: "solid blue",
              // backgroundColor: "red"
            }}
          ></div>
          <div
            className="pic-space"
            style={{
              marginLeft: "0.15vw",
              display: "flex",
              width: "94.8vw",
              height: "75vh",
              // marginLeft:"1vw",
              // marginLeft:"1.5vw",
              border: "solid blue",
              // backgroundColor: "black",
            }}
          ></div>
          <Carasuel />
        </div>
        <div style={{ marginTop: "5vh" }}>
          <h1
            id="date"
            className="heading text-center table-success"
            style={{
              border: "solid blue",
              padding: "1vw",
              fontSize: "3rem",
              // color: "black",
              width: "95vw",
            }}
          >
            Search By Date
          </h1>
          <Covid />
          <h1
            id="world"
            className="heading text-center table-success"
            style={{
              border: "solid blue",
              padding: "1vw",
              fontSize: "3rem",
              // color: "black",
              width: "95vw",
            }}
          >
            Search Wordwide through Country Name
          </h1>
          <CountryCases />
          <h1
            id="state"
            className="heading text-center table-success"
            style={{
              border: "solid blue",
              padding: "1vw",
              fontSize: "3rem",
              // color: "black",
              width: "95vw",
            }}
          >
            Search By State in India
          </h1>
          <Cases />
        </div>
      </div>
    </div>
  );
};
