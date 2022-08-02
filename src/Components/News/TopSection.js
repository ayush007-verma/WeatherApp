import React from "react";
import "./Header.css";
import {
  Card,
  Carousel,
} from "react-bootstrap";

export const TopSection = () => {
  return (
    <div>
      <div
        className="top-mid-section"
        style={{
          position: "absolute",
          // top: "50rem",
          height: "60rem",
          width: "60rem",
          // border:"solid brown"
          //   left: "22rem",
        }}
      >
        <div style={{ color: "black", cursor: "pointer" }} href="">
          <h1 className="highlight text-center">Specials</h1>
        </div>
        <hr class="hr-text" data-content="Specials"></hr>
        <Carousel
          style={{
            width: "55rem",
            cursor: "pointer",
            left: "2rem",
            border: "solid blue",
          }}
        >
          <Carousel.Item>
            <img
              style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
              className="d-block w-100"
              src="https://www.eda.admin.ch/dam/countries/countries-content/india/Images/Building-Consulate%20General.jpg/_jcr_content/renditions/cq5dam.thumbnail.588.368.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{ fontWeight: "bold" }}>
                Iran police probe death of Swiss embassy staffer in Tehran
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
              className="d-block w-100"
              src="https://images.moneycontrol.com/static-mcnews/2018/12/SENSEX_NSE_nifty_BSE_Stock-market-770x433.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 style={{ fontWeight: "bold" }}>
                Closing Bell: Nifty close below 14,500, Sensex slips 465 pts;
                PSU Banks outshine
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
              className="d-block w-100"
              src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/assets/2017/02/26716/image1170x530cropped.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 style={{ fontWeight: "bold" }}>
                UN human rights office urges calm, after bloodshed in Colombian
                city of Cali
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
              className="d-block w-100"
              src="https://d2r2ijn7njrktv.cloudfront.net/IL/uploads/2021/05/04153950/bengal-post-poll-violence.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 style={{ fontWeight: "bold" }}>
                West Bengal post-poll violence: Plea in Supreme Court seeks CBI
                probe into attacks
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
              className="d-block w-100"
              src="https://d2r2ijn7njrktv.cloudfront.net/IL/uploads/2018/05/The-entrance-to-Central-Jail-No.-1-of-Tihar-Prisons-file-picPhoto-Rajeev-Tyagi.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 style={{ fontWeight: "bold" }}>
                Delhi High Court issues Covid guidelines for Tihar Jail inmates
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Card style={{ marginTop: "1.5rem",border:"solid black" }} className=".upper-card1">
          <Card.Header className="highlight text-center">Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>Nothing strengthens authority so much as silence.</p>
              <footer className="blockquote-footer">
                <cite title="Source Title">Leonardo DaVinci</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
