import { Component, useImperativeHandle } from "react";
import "../../App.css";
import "./About.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

var FeedbackStyle = {
  width: "90vw",
  height: "10vh",
  fontSize: "1.7rem",
  color: "red",
  border: "solid blue",
  margin: "1rem 3rem",
};

class About extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <h2 className="heading text-center" style={{ marginBottom: "2rem" }}>
          <a href="#Team">about me</a>
        </h2>
        <div
          style={{ display: "inline-block", height: "100vh", width: "100%" }}
        >
          <h2 className="heading">WeatherInfo : Weather Forecast Website</h2>
          <div>
            <h1 className="heading text-center">Sections Of WeatherInfo</h1>
            <ol>
              <li className="p">
                Specialized Forecast : Displays weather Information(Climate,
                Temperature , Time, Date ) as per the input .
              </li>
              <li className="p">
                COVID Tracker : Tracks COVID cases with the help of various APIs
                and allows the user to get the data within specific parameters
                provided by the user.
              </li>
              <li className="p">
                News–Section : Keeps updated about all the current Affairs
                across the world . Contains various categories of news (Weather,
                Business, Technology etc.)
              </li>
            </ol>
            <h1 className="heading text-center">Api's Used</h1>
            <ol>
              <li className="p">
                <h2>Weather Api's :-</h2>
                <p>
                  <a
                    href="https://api.openweathermap.org/data/2.5/weather?q=Ludhiana&appid=43e43bf4c928d32e3d27ef936a923ae3"
                    target="_blank"
                  >
                    https://api.openweathermap.org/data/2.5/weather?q=Ludhiana&appid=43e43bf4c928d32e3d27ef936a923ae3
                  </a>
                </p>
                <p>
                  <a
                    href="http://api.openweathermap.org/data/2.5/weather?q=Chandigarh&units=metric&appid=3bba633bc8e4663b28997f1297e96210"
                    target="_blank"
                  >
                    http://api.openweathermap.org/data/2.5/weather?q=Chandigarh&units=metric&appid=3bba633bc8e4663b28997f1297e96210
                  </a>
                </p>
              </li>
              <li className="p">
                <h2>Covid Api's :-</h2>
                <p>
                  <a href="https://covidapi.info/api/v1/global" target="_blank">
                    https://covidapi.info/api/v1/global
                  </a>
                </p>
                <p>
                  <a
                    href="https://api.covid19india.org/data.json"
                    target="_blank"
                  >
                    https://api.covid19india.org/data.json
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.trackcorona.live/api/countries"
                    target="_blank"
                  >
                    https://www.trackcorona.live/api/countries
                  </a>
                </p>
              </li>
            </ol>
            <h1 className="heading text-center">Features Of WeatherInfo</h1>
            <ol>
              <li className="p">
                The website is aiming at providing Weather Forecast
                corresponding to different location entered by the User.
              </li>
              <li className="p">
                Website contains a COVID Tracking feature which helps to fetch
                COVID related details across the world specific to date, Nations
                and States.
              </li>
              <li className="p">
                Specialized Forecast feature allows dynamic Backgrounds
                corresponding to different weather.
              </li>
            </ol>
            <h2 className="heading text-center">UpComing Features</h2>
            <ol>
              <li className="p">
                We can set two default locations dynamically in the Home-Page to
                get the forecast of users choice on home page
              </li>
              <li className="p">
                Forecast will be available in the Future. Global Map will be
                updated with some new features :
                <br />
                a) Wind Direction
                <br />
                b)Precipitation Level
                <br />
                c) Rain Prediction
              </li>
              <li className="p">
                COVID Tracker will be updated with features:
                <br />
                a) Vaccination details across the World.
                <br />
                b) AI predicted Graphs will be added for particular periods.
                <br />
                c) Live Tracking of Cases WorldWide.
              </li>
              {/* <li>
                COVID Tracker will be updated featuring:
                <br />
                a) Vaccination details across the World.
                <br />
                b) AI predicted Graphs will be added for particular periods.
              </li> */}
            </ol>
          </div>
          <header>
            <div class="overlay"></div>
            <video
              style={{ margin: "6vw 10vw", border: "solid blue" }}
              playsinline="playsinline"
              autoplay="autoplay"
              muted="muted"
              loop="loop"
            >
              <source
                src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
                type="video/mp4"
              />
            </video>
          </header>
        </div>
        <h2
          id="Team"
          className="heading text-center"
          style={{ marginBottom: "2rem" }}
        >
          Reach me
        </h2>
        <div
          style={{
            display: "inline-flex",
            width: "100vw",
            height: "80vh",
            // border: "solid blue",
          }}
        >
          
          <div
            className="heading"
            style={{
              width: "47vw",
              height: "74vh",
              margin: "2vh 2vw",
              border: "solid blue",
            }}
          >
            <div
              style={{
                width: "46vw",
                height: "36vh",
                backgroundImage:
                  "url('https://cdn.solace.com/wp-content/uploads/2019/01/bg-clouds.jpg')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                // margin: "2vh 2vw",
                borderBottom: "solid blue",
              }}
            ></div>
            <h2 className="highlight text-center" style={{ fontSize: "4rem" }}>
              Ayush Verma
            </h2>
            <p
              class="highlight text-center"
              style={{ fontSize: "2rem", color: "blue" }}
            >
              ayush3528.be20@chitkara.edu.in
            </p>
            <a href="https://github.com/ayush007-verma/" target="_blank">
              <FontAwesomeIcon
                className="icon"
                style={{
                  height: "3rem",
                  width: "3rem",
                  color: "cyan",
                  cursor: "pointer",
                  marginLeft: "4rem",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
                icon={faGithub}
              />
            </a>
            <a
              href="https://www.instagram.com/ayush_verma_2310/"
              target="_blank"
            >
              <FontAwesomeIcon
                className="icon"
                style={{
                  height: "3rem",
                  width: "3rem",
                  color: "cyan",
                  cursor: "pointer",
                  marginLeft: "1rem",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
                icon={faInstagramSquare}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-verma-427a8a1b8/"
              target="_blank"
            >
              <FontAwesomeIcon
                className="icon"
                style={{
                  height: "3rem",
                  width: "3rem",
                  color: "cyan",
                  cursor: "pointer",
                  marginLeft: "1rem",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
                icon={faLinkedinIn}
              />
            </a>
            <button
              class="btn btn-outline-primary"
              style={{
                width: "12vw",
                height: "8vh",
                fontSize: "2rem",
                marginTop: "-4rem",
                marginLeft: "4rem",
              }}
            >
              Contact
            </button>
          </div>
        </div>
        

        <h2 className="heading text-center my-3">FeedBack Form</h2>
        <form className="heading" style={{ border: "solid blue" }}>
          <input
            name="name"
            type="text"
            className="table-primary heading"
            style={FeedbackStyle}
            placeholder="Name"
          />
          <input
            name="email"
            type="text"
            className="table-primary heading"
            placeholder="Email"
            style={FeedbackStyle}
          />
          <textarea
            name="text"
            className="table-primary heading"
            placeholder="Any Comment You Want To add for Us"
            style={FeedbackStyle}
          ></textarea>
          <button
            type="submit"
            style={{
              width: "20vw",
              height: "7vh",
              fontSize: "1.5rem",
              margin: "1rem 3rem",
            }}
            onClick={() => {
              alert("Successfully Saved FeedBack");
            }}
            className="btn btn-outline-primary btn-lg"
          >
            Submit{" "}
          </button>
        </form>
        <div style={{ height: "3vh" }}></div>
      </div>
    );
  }
}

export default About;
