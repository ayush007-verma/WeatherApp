import React, { Component } from "react";

import "../../App.css";
import loading from "./pic1.svg";

export default class covid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      date1: "",
      covidDetails: "",
    };
  }
  handleInput1 = (event) => {
    this.setState({ date1: event.target.value });
  };
  logDate1 = () => {
    var allCasesDay = this.state.items.cases_time_series;
    let counter = 0;
    var date = this.state.date1;
    var date1Cases = allCasesDay.filter(function (newarr) {
      return allCasesDay[counter++].dateymd === date;
    });
    // console.log(allCasesDay);
    if (date1Cases.length === 0)
      alert(
        "Invalid Date \n Please Enter the date b/w 30 January 2020 - till now"
      );
    else {
      console.log(date1Cases);
      console.log(date1Cases[0].dailyconfirmed);
      console.log(date1Cases[0].dailydeceased);
      console.log(date1Cases[0].dailyrecovered);
      console.log(date1Cases[0].dateymd);
      this.setState({
        covidDetails: (
          <>
            <h1 style={{ fontSize: "4.4rem" }}>{date1Cases[0].dateymd}</h1>
            <div
              style={{
                display: "inline-block",
                //marginLeft: "6vw",
                //color:"white"
              }}
            >
              <h3 style={{ fontSize: "3rem" }}>
                Daily Confirmed :- <code>{date1Cases[0].dailyconfirmed}</code>
              </h3>
              <h3 style={{ fontSize: "3rem" }}>
                Daily Deceased :-<code>{date1Cases[0].dailydeceased}</code>
              </h3>
              <h3 style={{ fontSize: "3rem" }}>
                Daily Recovered :-<code>{date1Cases[0].dailyrecovered}</code>
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
                Total Confirmed :- <code>{date1Cases[0].totalconfirmed}</code>
              </h3>
              <h3 style={{ fontSize: "3rem" }}>
                Total Deceased :-<code>{date1Cases[0].totaldeceased}</code>
              </h3>
              <h3 style={{ fontSize: "3rem" }}>
                Total Recovered :-<code>{date1Cases[0].totalrecovered}</code>
              </h3>
            </div>
          </>
        ),
      });
    }
  };
  componentDidMount() {
    let url = "https://api.covid19india.org/data.json";
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
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (
        <div>
          <img
            src={loading}
            style={{ position: "relative" }}
            className="App-logo"
            alt="logo"
          />
          &nbsp;Error: {error.message}
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div>
          <img src={loading} className="App-logo" alt="logo" />
          &nbsp;
          <code style={{ fontSize: "2rem" }}>Loading!!!!!.</code>
        </div>
      );
    } else {
      return (
        <div>
          <div
            style={{
              border: "solid blue",
              height: "50vh",
              backgroundColor: "black",
            }}
          >
            <input
              type="date"
              onChange={this.handleInput1}
              placeholder="Enter Date1"
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
                height: "20vh",width: "36vw",
                marginTop:"-2vw",
                fontSize: "2.5rem",
                fontFamily: "sans-serif",
                fontStyle: "italic",
              }}
              onClick={this.logDate1}
            >
              Get Covid Case Details
            </button>
          </div>
          <div className="table table-success table-bg">{this.state.covidDetails}</div>
        </div>
      );
    }
  }
}
