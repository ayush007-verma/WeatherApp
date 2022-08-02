import React from "react";
import "../News/Header.css";
import { Carousel } from "react-bootstrap";
import path from "./Carasuel1.png";
import path2 from "./Carasuel2.png";
import path3 from "./Carasuel3.jpeg";
import path4 from "./Carasuel4.jpg";

export const Carasuel = () => {
  const HomeStyle = {
    backgroundImage: "url(" + path + ")",
    width: "400px",
    height: "300px",
    border: "solid black",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <>
      <div
        style={{
          marginLeft: "0.15vw",
          display: "flex",
          width: "94.8vw",
          height: "75vh",
          // marginLeft:"1vw",
          // marginLeft:"1.5vw",
          border: "solid blue",
          position: "relative",
        }}
      >
        <Carousel
          style={{
            width: "94.8vw",
            height: "75vh",
            cursor: "pointer",
            //   left: "2rem",
            border: "solid black",
            position: "relative",
          }}
        >
          <Carousel.Item>
            <div
              style={{
                width: "inherit",
                height: "30rem",
                // backgroundColor: "red",
                // opacity: "0.8",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: "url(" + path + ")",
                backgroundSize: "contain",
              }}
            ></div>
            <Carousel.Caption>
              <h3 style={{ fontWeight: "bold",color:"blue" }}>
                Government just made COVID-19 vaccine appointment tracker sites
                pretty much useless by updating CoWIN guidelines
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div
              style={{
                width: "inherit",
                height: "30rem",
                // backgroundColor: "red",
                // opacity: "0.8",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: "url(" + path2 + ")",
                backgroundSize: "contain",
              }}
            ></div>

            <Carousel.Caption>
              <h3 style={{ fontWeight: "bold" ,color:"blue"}}>
              Plateauing in daily new Covid cases
              ,positivity rate recorded over past 3 days: Govt
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div
              style={{
                width: "inherit",
                height: "30rem",
                // backgroundColor: "red",
                // opacity: "0.8",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: "url(" + path3 + ")",
                backgroundSize: "contain",
              }}
            ></div>

            <Carousel.Caption>
              <h3 style={{ fontWeight: "bold",color:"blue" }}>
              Acute COVID-19 vaccine shortage
            has put people’s lives at serious risk: Ficci
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div
              style={{
                width: "inherit",
                height: "30rem",
                // backgroundColor: "red",
                // opacity: "0.8",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: "url(" + path4 + ")",
                backgroundSize: "contain",
              }}
            ></div>

            <Carousel.Caption>
              <h3 style={{ fontWeight: "bold" ,color:"blue"}}>
              COVID-19 levels fall in UK
            as health officials review variant found in India
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item>
          <div
              style={{
                width: "inherit",
                height: "30rem",
                // backgroundColor: "red",
                // opacity: "0.8",
                backgroundPosition: "contain",
                backgroundRepeat: "no-repeat",
                backgroundImage: "url(" + path + ")",
                backgroundSize: "cover",
              }}
            ></div>

            <Carousel.Caption>
              <h3 style={{ fontWeight: "bold" }}>
                Delhi High Court issues Covid guidelines for Tihar Jail inmates
              </h3>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </div>
    </>
  );
};
