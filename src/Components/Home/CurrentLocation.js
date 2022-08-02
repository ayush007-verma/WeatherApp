import { React, Component } from "react";

import "../../FontAwesomeIcons/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

class CurrentLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  componentDidMount() {
    let defaultCity = this.props.city;
    let url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      defaultCity +
      "&appid=43e43bf4c928d32e3d27ef936a923ae3";
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div 
        className="div2"
          style={{
            width: "45%",
            hieght: "76vh",
            color: "white",
            margin:"5vh  2vw",
            // backgroundColor: "black",
            // border: "solid red",
            position:"relative",
            display: "inline-block",
          }}
        >
          {" "}
          <h1 className="text-center">
            <FontAwesomeIcon icon="home" />{" "}
            <FontAwesomeIcon icon="map-marker-alt" />
            <span style={{ fontSize: "5rem" }}>{items.name}</span>
          </h1>
          <p className="text-center" style={{fontSize:"4rem"}}>
          {items["weather"][0]["main"]}
          </p>
          <h1 className="text-center" style={{ fontSize: "5rem" }} >
           {Math.round(items.main.temp_min - 273)+0.2} &#8451; 
          </h1>
           
          <h4 className="text-center"> 
          <FontAwesomeIcon icon="temperature-low"/>
          Min:{Math.round(items.main.temp_min - 273) + 0.1}
          &nbsp; | &nbsp;
          <FontAwesomeIcon icon="temperature-high"/>
          Max:{Math.round(items.main.temp_max - 273) + 0.9} </h4> 
          <h4 className="text-center">Humidity :-{items.main.humidity}</h4>
        </div>
      );
    }
  }
}

export default CurrentLocation;