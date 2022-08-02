import React from "react";
import "./Covid1.css";

export const TestUpperSection = () => {
  return (
    <div className="main-container" style={{backgroundColor:"black"}}>
      <section className="img-container">
        <h1 className="heading text-center"
        style={{width:"95vw",backgroundColor:"black",border:"solid blue"}}>Monitoring Covid19 Outbreak</h1>
        <div
          className="img"
          style={{
            display: "flex",
            // margin: "1vw",
            margin:"0",
            width: "95vw",
            // width: "94.13vw",
            height: "64vh", //   width: "100vw",
            //   height: "60vh",
            border: "solid blue",
            backgroundColor: "black",
          }}
        ></div>
      </section>
      <section className="search" 
      style={{width:"94vw"}}
      >
        <h1 className="heading1 text-center"> Search Options</h1>
        <div className="div table-success">
          <a href="#date" className="text-center py-4">
            Seach By Date
          </a>
        </div>
        <div class=" div table-success">
        <a href="#world" className="text-center py-4 ">
          Search WorldWide
        </a>
        </div>
        <div className="div table-success">
        <a href="#state" className="text-center py-4">Search By State
        </a>
        </div>
        
      </section>
    </div>
  );
};
