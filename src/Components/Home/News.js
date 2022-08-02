import React from "react";
import { Carousel } from "react-bootstrap";
import "./BlogFlexCards.css"

export const News = () => {
  return (
    <div
      style={{
        margin: "0",
        padding: "0",
        width: "100%",
        backgroundColor: "black",
        fontFamily: "sans-serif",
        fontSize: "2.5rem",
        color: "cyan",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
        // lineHeight: "1.3",
      }}
    >
      <h1
        className="heading1 bg-dark text-center"
        style={{ fontSize: "3rem" }}
      >
        Weather News and Updates
      </h1>
      <Carousel
        style={{
          width: "55rem",
          cursor: "pointer",
          margin:"5rem 14rem",
          border: "solid blue",
        }}
      >
        <Carousel.Item>
          <img
            style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
            className="d-block w-100"
            src="https://s.w-x.co/util/image/w/in-cyclone%20wave.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ fontWeight: "bold" }}>
            Cyclone Tauktae to Form Over Arabian Sea
             by May 16; Heavy Rains Forecast Over Kerala, 
             Karnataka, Maharashtra & TN
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
            className="d-block w-100"
            src="https://s.w-x.co/util/image/w/in-cyclone%20arabian%20sea.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 style={{ fontWeight: "bold" }}>
            Kerala, Karnataka, Maharashtra Brace for 
            First Potential Cyclone of 2021 as 
            Low Pressure System Brews in Arabian Sea
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
            className="d-block w-100"
            src="https://s.w-x.co/util/image/w/in-uttarakhand1.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{ fontWeight: "bold" }}>
            ‘Cloudbursts’ Reported in Uttarakhand as 
            Fresh Disturbance Approaches; Buildings Crumble as River Spurts
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
            className="d-block w-100"
            src="https://c.ndtvimg.com/2021-01/rdho1dpo_delhi-dense-fog_625x300_22_January_21.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{ fontWeight: "bold" }}>
            Weather News Today: Dense Fog Over Pockets In Delhi
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
            className="d-block w-100"
            src="https://s.w-x.co/util/image/w/in-rain%20tamil%20nadu.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{ fontWeight: "bold" }}>
            Kerala, Karnataka,
            Tamil Nadu to Witness Isolated Heavy Rains This Week; IMD Issues Yellow Alert
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
