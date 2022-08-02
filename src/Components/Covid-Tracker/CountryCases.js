import React, { Component } from "react";

export default class CountryCases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      items: [],
      country: "",
      covidDetails: "",
    };
  }
  handleInput = (e) => {
    this.setState({
      country: e.target.value,
    });
  };
  logState = () => {
    var country = this.state.country;
    var allCases = this.state.items.data;
    let counter = 0;
    var resCase = allCases.filter(function (newarr) {
      return allCases[counter++].location === country;
    });
    if (resCase.length === 0) alert("Enter Valid Country Name");
    else {
      console.log(resCase);
      console.log(resCase[0].dead);
      console.log(resCase[0].recovered);
      console.log(resCase[0].confirmed);
      var code =
        "https://www.countryflags.io/" +
        resCase[0].country_code +
        "/flat/64.png";
      console.log(code);
      this.setState({
        covidDetails: (
          <>
            <h1 style={{ fontSize: "4.4rem" }}>
              {resCase[0].location}
              <div
                className="img"
                style={{
                  backgroundImage: "url(" + code + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "100px",
                  width: "100px",
                  display: "inline-flex",
                }}
              ></div>
            </h1>
            <div
              style={{
                display: "inline-block",
                //marginLeft: "6vw",
                //color:"white"
              }}
            >
              <h3 style={{ fontSize: "3rem" }}>
                Confirmed :- <code>{resCase[0].confirmed}</code>
              </h3>
              <h3 style={{ fontSize: "3rem" }}>
                Deaths :-<code>{resCase[0].dead}</code>
              </h3>
              <h3 style={{ fontSize: "3rem" }}>
                Recovered :-<code>{resCase[0].recovered}</code>
              </h3>
            </div>
          </>
        ),
      });
    }
  };
  componentDidMount() {
    const url = "https://www.trackcorona.live/api/countries";
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
            placeholder="Enter Country You want to Search"
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
              // borderRadius:"40%",
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
