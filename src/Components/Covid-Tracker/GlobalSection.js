import React, { Component } from "react";
import "./Covid1.css"

export default class GlobalSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      error: null,
      items: [],
    };
  }
  componentDidMount() {
    const url = "https://covidapi.info/api/v1/global";
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
  }

  render() {
    const { isLoaded, error, items } = this.state;
    const global = items.result;
    if (error) {
      return <h1>Error: {error.message}</h1>;
    } else if (!isLoaded) {
      return <h1>Loading!!!</h1>;
    } else {
      return (
        <div className="div1"
          style={{
            display: "flex",
            // marginLeft: "10vw",
            border:"solid blue",
          }}
        >
          <h1
            className="text-center"
            style={{
              fontSize: "4.4rem",
            }}
          >
            Global Count
          </h1>
          <h3
            className="text"
            style={{
              fontSize: "3rem",
            }}
          >
            Confirmed :- {global.confirmed}
          </h3>
          <h3
            className="text"
            style={{
              fontSize: "3rem",
            }}
          >
            Deaths :- {global.deaths}
          </h3>
          <h3
            className="text"
            style={{
              fontSize: "3rem",
            }}
          >
            Recovered :- {global.recovered}
          </h3>
        </div>
      );
    }
  }
}
