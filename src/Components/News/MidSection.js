import React from "react";
import "./Header.css";
import {
  Card,
} from "react-bootstrap";


export const MidSection = () => {
  return (
    <div>
      <div
        className="upper-div"
        style={{
          display: "flex",
          position: "relative",
          width: "84rem",
          height: "100vh",
          top: "50rem",
          // border: "solid black",
        }}
      >
        <Card.Link
          className="highlight text-center"
          style={{  cursor: "pointer", marginTop: "6rem",marginLeft:"17rem" }}
          href=""
        >
          <h1 
          className="highlight text-center">Top Headlines</h1>
        </Card.Link>
        <hr />
        <Card
          className="upper-card1"
          style={{
            width: "25rem",
            height: "29rem",
            cursor: "pointer",
            border: "none",
            position: "absolute",
            top: "12rem",
            left: "2rem",
            border: "solid black",
            // left: "20rem",
          }}
        >
          <Card.Img
            variant="top"
            src="https://i.ndtvimg.com/i/2017-05/delhi-summers-pti_650x400_51494170496.jpg"
          />
          <Card.Body>
            <Card.Title>Mercury Crosses 44 Degrees In Delhi.</Card.Title>
            <Card.Text>
              The Safdarjung Observatory, which provides representative figures
              for the city, recorded a maximum of 42.2 degrees Celsius, four
              notches above normal.The maximum temperature in parts of Delhi
              breached the 44 degrees Celsius mark.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <br />
            <Card.Link href="#">Read More</Card.Link>
          </Card.Body>
        </Card>

        <Card
          className="upper-card1"
          style={{
            width: "25rem",
            height: "29rem",
            cursor: "pointer",
            border: "none",
            position: "absolute",
            top: "12rem",
            left: "30rem",
            border: "solid black",
          }}
        >
          <Card.Img
            variant="top"
            src="https://i.ndtvimg.com/i/2016-05/heat-wave_650x400_81462246862.jpg"
          />
          <Card.Body>
            <Card.Title>
              Heatwave Conditions Likely In Parts Of Rajasthan For Next 48 Hours
            </Card.Title>
            <Card.Text>
              Several parts of Rajasthan are likely to experience heatwave
              conditions over the next 48 hours with a rise in maximum
              temperatures.
            </Card.Text>
            <br />
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Read More</Card.Link>
          </Card.Body>
        </Card>
        <div
          className="upper-side-section"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "40rem",
            width: "25rem",
            position: "absolute",
            // top: "50rem",
            top: "5rem",
            left: "58rem",
            // border: "solid black"
          }}
        >
          <Card
            className="upper-side-card1"
            style={{
              border: "solid black",
              // left: "-20rem"
            }}
          >
            <Card.Body>
              <Card.Link style={{ cursor: "pointer" }}>
                <Card.Title>
                  City temperature likely to rise in coming days
                </Card.Title>
              </Card.Link>
              <Card.Text>
                The minimum temperature in Delhi rose to 14 degrees Celsius on
                Sunday which was five degrees below the normal.
              </Card.Text>
              <Card.Text>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            className="upper-side-card2"
            style={{
              border: "solid black",
              // left: "-20rem"
            }}
          >
            <Card.Body>
              <Card.Link style={{ cursor: "pointer" }}>
                <Card.Title>As COVID bodies burn, residents fume</Card.Title>
              </Card.Link>
              <Card.Text>
                “Now he will pour diesel on the pyre to make it burn quickly,”
                says G. Ramulu
              </Card.Text>
              <Card.Text>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            className="upper-side-card3"
            style={{
              border: "solid black",
              // left: "-20rem"
            }}
          >
            <Card.Body>
              <Card.Link style={{ cursor: "pointer" }}>
                <Card.Title>
                  Tornado outbreak leaves trail of damage across Mississippi
                </Card.Title>
              </Card.Link>
              <Card.Text>
                “Oh my God, my first new house in 40 years and it’s gone,”
                Vickie told the AP while surveying the damage on Monday.
              </Card.Text>
              <Card.Text>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
