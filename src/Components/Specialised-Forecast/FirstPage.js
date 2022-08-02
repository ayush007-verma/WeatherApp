import React, { Component } from "react";
import "./FirstPage.css";
//import { LeftSection } from "./LeftSection";
//import { RightSection } from "./RightSection";
import CurrentLocation from "../Home/CurrentLocation"

export class FirstPage extends Component {
  render() {
    
    // Task Day 3 :->
    // Evaluate Some Way To Call Any Of Above Four Functions 
    // Through calls Array and thus backgroundImages Must change 
    // In App On Changing The Index Of calls[index] in Code... :)
    
    const calls=["Sunny_img.jpg","Rainy_img.png","Stormy_img.jpg","Windy_img.jpg","Pleasant_img.jpg"]

    let x = this.props.weather_index

    const HomeStyle = {
      backgroundImage: "url(Weather-imgs/"+calls[x]+")"
    };

    const ContainerStyle = {
      backgroundImage: 
      "radial-gradient(rgba(10, 10, 10, 0.8),rgba(10, 10,10,0.8)),url(Weather-imgs/"+calls[x]+")"
    };
    return (
      <div className="c" style={ ContainerStyle }>
        <div className="home" style={ HomeStyle }>
          <CurrentLocation style={{backgroundColor: "inherit"}} city="Ludhiana"/>
        </div>
      </div>
    );
  }
}

export default FirstPage;
