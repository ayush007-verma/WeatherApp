import React, { Component } from "react";
import "./Covid1.css"

export default class DefaultSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      error: null,
      items: [],
      date: [],
    };
  }
  componentDidMount() {
    const country = "IND";
    const url = "https://covidapi.info/api/v1/country/" + country + "/latest";
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
    const url2 = "https://covidapi.info/api/v1/latest-date"; 
    fetch(url2)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          date: result,
        });
      });
  }

  render() {
    const { isLoaded, error, items } = this.state;
    const date = "2021-05-14";
    const global = items.result;
    console.log(items.result)
    if (error) {
      return <h1>Error: {error.message}</h1>;
    } else if (!isLoaded) {
      return <h1>Loading!!!</h1>;
    } else {
      return (
        <div className="div1"
          style={{
            display: "flex",
            // marginLeft: "6vw",
            border:"solid blue",
          }}
        >
          <h1 className="text-center" style={{ fontSize: "4.4rem" }}>
            India Count
          </h1>
          <h3
            className="text"
            style={{
              fontSize: "3rem",
            }}
          >
            Confirmed :- 
            {global[date].confirmed} 
            
          </h3>
          <h3
            className="text"
            style={{
              fontSize: "3rem",
            }}
          >
            Deaths :- 
            {global[date].deaths}
          </h3>
          <h3
            className="text"
            style={{
              fontSize: "3rem",
            }}
          >
            Recovered :- 
            {global[date].recovered}
          </h3>
        </div>
      );
    }
  }
}
