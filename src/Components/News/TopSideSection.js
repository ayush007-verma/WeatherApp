import React from "react";
import "./Header.css";
import {
  Card,
} from "react-bootstrap";

export const TopSideSection = () => {
  return (
    <div>
      <div
        className="side-mid-section"
        style={{
          position: "absolute",
          // top: "48.7rem",
          left: "63rem",
          display: "flex",
          flexDirection: "column",
          height: "60rem",
        }}
      >
        <Card.Link style={{ color: "black", cursor: "pointer" }} href="">
          <h1 className="highlight text-center">Trending</h1>
        </Card.Link>
        <hr class="hr-text" data-content="Trending"></hr>
        <Card
          className="upper-card1"
          style={{ width: "18rem", 
          height: "13.7rem", marginBottom: "0.5rem"
          ,border:"solid black" }}
        >
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold" }}>
              PM Modi Confronts Pressure to Lock Down India
            </Card.Title>
            <Card.Text>
              Two weeks ago, Prime Minister Narendra Modi called on states to
              only consider lockdowns "as the last option."
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="upper-card1"
          style={{ width: "18rem",
           height: "14.5rem",
            marginBottom: "0.5rem",
            border:"solid black" }}
        >
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold" }}>
              Adar Poonawalla To Invest Over $300 Million In UK
            </Card.Title>
            <Card.Text>
              Vaccine maker the Serum Institute of India is set to invest in
              facilities in the United Kingdom and could even manufacture
              inoculations in the UK in future.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="upper-card1"
          style={{ width: "18rem", height: "14.5rem",border:"solid black", marginBottom: "0.5rem" }}
        >
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold" }}>
              IPL 2021 Postponed: Reactions Galore From Fans And Others
            </Card.Title>
            <Card.Text>
              The 14th edition of the Indian Premier League (IPL) was suspended
              today by the BCCI owing to the rise in COVID-19 cases among
              players.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
