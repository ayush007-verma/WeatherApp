import React, { Component } from "react";

import { Link } from "react-router-dom";

export class Changedefault extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultCity1: "Ludhiana",
      defaultCity2: "Chandigarh",
      changeCity1: "",
      changeCity2: "",
      input1: "",
      input2: "",
    };
  }
  render() {
    return (
      <div>
        <div style={{ backgroundColor: "black" }}>
          <button
            onClick={() => {
              this.setState({
                changeCity1: (
                  <>
                    <input
                      style={{
                        width: "30vw",
                        height: "10vh",
                        border: "0.5px solid black",
                      }}
                      onChange={(e) => {
                        this.setState({ input1: e.target.value });
                      }}
                    />
                    <button
                      onClick={() => {
                        this.setState({ defaultCity1: this.state.input1 });
                      }}
                    >
                      <Link to="/Reload"> Save </Link>
                    </button>
                  </>
                ),
              });
            }}
            style={{
              height: "10vh",
              width: "40vw",
              fontSize: "2rem",
              color: "cyan",
              backgroundColor: "black",
            }}
          >
            Change default City1
          </button>
          <button
            onClick={() => {
              this.setState({
                changeCity2: (
                  <>
                    <input
                      style={{
                        width: "30vw",
                        height: "10vh",
                        border: "0.5px solid black",
                      }}
                      onChange={(e) => {
                        this.setState({ input2: e.target.value });
                      }}
                    />
                    <button
                      onClick={() => {
                        this.setState({ defaultCity2: this.state.input2 });
                      }}
                    >
                      <Link to="/Reload"> Save </Link>
                    </button>
                  </>
                ),
              });
            }}
            style={{
              height: "10vh",
              width: "40vw",
              marginLeft: "18vw",
              fontSize: "2rem",
              color: "cyan",
              backgroundColor: "black",
            }}
          >
            Change default City2
          </button>
        </div>
        <div style={{ backgroundColor: "black" }}>
          <div
            style={{
              display: "inline-block",
              height: "12vh",
              width: "40vw",
              fontSize: "2rem",
              color: "cyan",
              backgroundColor: "black",
            }}
          >
            {this.state.defaultCity1}
            {this.state.changeCity1}
          </div>
          <div
            style={{
              display: "inline-block",
              height: "12vh",
              width: "40vw",
              fontSize: "2rem",
              color: "cyan",
              marginLeft: "18vw",
              backgroundColor: "black",
            }}
          >
            {this.state.defaultCity2}
            {this.state.changeCity2}
          </div>
        </div>
      </div>
    );
  }
}

export default Changedefault;
