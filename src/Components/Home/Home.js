import React, { Component } from "react";

import CurrentLocation from "./CurrentLocation";
// import Changedefault from "./Components/Home/Changedefault";
import { SearchSection as Search } from "./SearchSection";
import {News} from './News'
import {Covid} from './Covid'
import { BlogFlexCards } from "./BlogFlexCards";
import Path from "../../Rain_img2.png";

export default class Home extends Component {
  render() {
    const HomeStyle = {
      width: "98.7vw",
      height: "80vh",
      backgroundImage: "url(" + Path + ")",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };
    return (
      <div style={{margin:0,display:"inline-block",padding:0,backgroundColor:"black"}}>
        <div>
          <Search />
        </div>
        {/* Below Div Just to accumulate Map Div Incase of latancy in Loading map Due To Slow net Position Dominance */}
        <div
          style={{
            display: "block",
            height: "57vh",
            width: "100%",
            backgroundColor: "green",
            color: "cyan",
            border: "solid black",
          }}
        >
          <h1>Google Map Loading !!... </h1>
        </div>
        <div style={HomeStyle}>
          <CurrentLocation city="Ludhiana" />
          <CurrentLocation city="Chandigarh" />
        </div>
        <div>
          <News/>
        </div>
        <div>
          <BlogFlexCards />
        </div>
        <div>
          <Covid/>
        </div>
        <footer
          className="bg-dark text-light"
          style={{
            margin: 0,
            padding: 0,
            position: "relative",
            bottom: "100%",
            textAlign: "center",
          }}
        >
          <p className="text-center">Copyright &copy; WeatherInfo.App</p>
        </footer>
      </div>
    );
  }
}
