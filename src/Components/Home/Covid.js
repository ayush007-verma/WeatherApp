import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BlogFlexCards.css";

export const Covid = () => {
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
        className=" bg-dark text-center heading1"
        style={{ fontSize: "3rem",marginBottom:"2rem" }}
      >
        Lets Fight Against Covid
      </h1>
      <h2 className="heading1 text-center">Indian Covid Crisis</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // justifyContent: "space-between",
          width: "100%",
          height: "60vh",
          // border: "solid blue",
        }}
      >
        <div
          className="my-card"
          style={{
            display: "inline-block",
            width: "22vw",
            height: "50vh",
            margin: "4vh 1vw",
            fontSize: "1.5rem",
            border: "solid blue",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "21.5",
              height: "25vh",
              backgroundImage:
                'url("https://th.bing.com/th?id=OIF.wAT4kaP6gG2u6W%2fPE9u0mw&pid=ImgDet&rs=1")',
              backgroundSize: "contain",borderBottom:"solid blue"
            }}
          ></div>
          COVID-19 Updates: 5 States See Highest Toll, Oxygen Express Reaches
          Delhi, Vaccines Shortage{" "}
        </div>
        <div
          className="my-card"
          style={{
            display: "inline-block",
            width: "22vw",
            height: "50vh",
            margin: "4vh 1vw",
            fontSize: "1.5rem",
            border: "solid blue",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "21.5",
              height: "25vh",
              backgroundImage:
                'url("https://im.indiatimes.in/content/2021/Apr/1_6069373a56498.jpg")',
              backgroundSize: "contain",borderBottom:"solid blue"
            }}
          ></div>
          Shortage Of Hospital Beds Causing Lot Of Trouble
          All Over India..
        </div>
        <div
          className="my-card"
          style={{
            display: "inline-block",
            width: "22vw",
            height: "50vh",
            margin: "4vh 1vw",
            fontSize: "1.5rem",
            border: "solid blue",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "21.5",
              height: "25vh",
              backgroundImage:
                'url("https://th.bing.com/th/id/OIP.dFVGbEJm5152lCKVLiou9gHaD2?pid=ImgDet&rs=1")',
              backgroundSize: "contain",borderBottom:"solid blue"
            }}
          ></div>
          #IndiaFightsCovid
          &nbsp;&nbsp;PM Narendra Modi expected to join G7 summit in UK virtually
        </div>
        <div
          className="my-card"
          style={{
            display: "inline-block",
            width: "22vw",
            height: "50vh",
            margin: "4vh 1vw",
            fontSize: "1.5rem",
            border: "solid blue",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "21.5",
              height: "25vh",
              backgroundImage:
                'url("https://im.indiatimes.in/content/2021/May/ezgifcom-gif-maker-60_609bb3ab3a3fc.jpg?w=725&h=407")',
              backgroundSize: "contain",borderBottom:"solid blue"
            }}
          ></div>
          India Records 3.55 Lakh COVID-19 Recoveries In Last 24 Hours, Recovery
          Rate Stands At 83.04%
        </div>
      </div>
      <h2 className="text-center heading1">
        Coronavirus (COVID-19) Prevention:
      </h2>
      <h2 className="text-center heading1"> 12 Ways To Prevent Covid 19</h2>

      <Carousel
        style={{
          width: "55rem",
          cursor: "pointer",
          margin: "0 14rem",
          border: "solid blue",
        }}
      >
        <Carousel.Item>
          <img
            style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
            className="d-block w-100"
            src="https://s.yimg.com/ny/api/res/1.2/d0aCOOm2xJEc6_OiBspOaw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MC4yMTgxODE4MTgxODE4/https://s.yimg.com/uu/api/res/1.2/9jhuCtF5p9oqVrxkO2Fe7g--~B/aD02MTk7dz0xMTAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-US/att_cnn_articles_909/d64130563139aad851e1aadb321a0f87"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 style={{ fontWeight: "bold" }}>
              1. Wash your hands frequently and carefully
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
            className="d-block w-100"
            src="https://www.miamidade.gov/resources/images/initiatives/coronavirus/social-face.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{ fontWeight: "bold" }}>2. Avoid touching your face</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
            className="d-block w-100"
            src="https://s.yimg.com/uu/api/res/1.2/PlJRLn6fa2MCEtBaSaxo3g--~B/aD01MTE7dz03Njg7c209MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en_us/News/afp.com/f4fb41b2c43f137e35e7d1172e830c78ebe94029.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{ fontWeight: "bold" }}>
              3. Stop shaking hands and hugging people — for now
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.YsI5tMvpY7aTMcEZcS9SZwHaFb?pid=ImgDet&rs=1"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{ fontWeight: "bold" }}>
              4. Don’t share personal items
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
            className="d-block w-100"
            src="https://th.bing.com/th/id/R1ea48099eaae38b0f0848432515d52b1?rik=vohw1JgqsKUKqQ&riu=http%3a%2f%2fadvicesinhealth.com%2fwp-content%2fuploads%2f2018%2f07%2fCovering-your-mouth-with-your-hand-when-you-sneeze-or-cough.jpg&ehk=3NiD3petfxG2dum%2bu5aUG%2fj5LSGNWQC4aPz2Igu31%2bg%3d&risl=&pid=ImgRaw"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 style={{ fontWeight: "bold" }}>
              5. Cover your mouth and nose when you cough and sneeze
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.tOK9gnSU2ttdfNRLUVoClAHaE8?pid=ImgDet&rs=1"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{ fontWeight: "bold" }}>
              6. Clean and disinfect surfaces
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.wCyqCjX0kTCffb0Y8gQJjgHaEf?w=287&h=180&c=7&o=5&pid=1.7"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{ fontWeight: "bold" }}>
              7. Take physical (social) distancing seriously{" "}
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.fULSmrlBBOzTfmldSJ25VgHaFj?pid=ImgDet&rs=1"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{ fontWeight: "bold" }}>8. Do not gather in groups</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.SYmU_G12_fBK8QLsfCtNpwHaE8?pid=ImgDet&rs=1"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 style={{ fontWeight: "bold" }}>
              9. Avoid eating or drinking in public places
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.nh5ZEqsXy7OWL56mrjwD7QHaEc?pid=ImgDet&rs=1"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{ fontWeight: "bold" }}>10. Wash fresh groceries</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
            className="d-block w-100"
            src="data:image/jpeg;base64,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"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{ fontWeight: "bold" }}>11. Wear a (homemade) mask</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "40rem", height: "30rem", opacity: "0.8" }}
            className="d-block w-100"
            src="data:image/jpeg;base64,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"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{ fontWeight: "bold" }}>12. Self-quarantine if sick</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1
        className="heading1 bg-dark text-center"
        style={{ fontSize: "3rem" }}
      >
        To Track Covid19 <Link to="/Covid19" >CLick here</Link>
      </h1>
    </div>
  );
};
