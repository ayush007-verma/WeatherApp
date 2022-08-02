import React, { Component } from "react";

export default class cases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      items: [],
      state: "",
      covidDetails: "",
    };
  }
  handleInput = (e) => {
    this.setState({
      state: e.target.value,
    });
  };
  logState = () => {
    var state = this.state.state;
    var allCases = this.state.items.statewise;
    let counter = 0;
    var stateCase = allCases.filter(function (newarr) {
      return allCases[counter++].state === state;
    });
    if (stateCase.length === 0) alert("Enter Valid Indian State Name");
    else {
      console.log(stateCase);
      console.log(stateCase[0].active);
      console.log(stateCase[0].deaths);
      console.log(stateCase[0].recovered);
      console.log(stateCase[0].confirmed);
      this.setState({
        covidDetails: (
          <>
            <h1 style={{ fontSize: "4.4rem" }}>{stateCase[0].state}</h1>
            <div
              style={{
                display: "inline-block",
                //marginLeft: "6vw",
                //color:"white"
              }}
            >
              <h3 style={{ fontSize: "3rem" }}>
                Active Cases :- <code>{stateCase[0].active}</code>
              </h3>
              <h3 style={{ fontSize: "3rem" }}>
                Confirmed Cases :-<code>{stateCase[0].confirmed}</code>
              </h3>
            </div>
            <div
              style={{
                display: "inline-block",
                marginLeft: "6vw",
                //color:"white"
              }}
            >
              <h3 style={{ fontSize: "3rem" }}>
                Recovered Cases :-<code>{stateCase[0].recovered}</code>
              </h3>
              <h3 style={{ fontSize: "3rem" }}>
                No. of Deaths:-<code>{stateCase[0].deaths}</code>
              </h3>
            </div>
          </>
        ),
      });
    }
  };
  componentDidMount() {
    const url = "https://api.covid19india.org/data.json";
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
    return (
      <>
        <div
          style={{
            border: "solid blue",
            height: "50vh",
            backgroundColor: "black",
          }}
        >
          <input
            type="state"
            onChange={this.handleInput}
            placeholder="Enter state You want to Search"
            style={{
              border: "solid cyan",
              margin: "15vh 5vw",
              height: "20vh",
              width: "40vw",
              fontSize: "3rem",
              fontFamily: "sans-serif",
            }}
          />
          <button
            className="btn btn-outline-success btn-light"
            style={{
              border: "solid cyan",
              height: "20vh",
              width: "36vw",
              marginTop:"-2vw",
              fontSize: "2.5rem",
              fontFamily: "sans-serif",
              fontStyle: "italic",
            }}
            onClick={this.logState}
          >
            Get Covid Case Details
          </button>
        </div>
        <div className="table table-success table-bg">
          {this.state.covidDetails}
        </div>
      </>
    );
  }
}
