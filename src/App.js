import React from "react";

import Header from "./Components/Header/Header";

import  Home  from "./Components/Home/Home";
import About from "./Components/About/About";
import FetchData from "./Components/Specialised-Forecast/FetchData";
import { News } from "./Components/News/News";
import { CovidComponent as Covid } from "./Components/Covid-Tracker/CovidComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>q
      <Router>
        <div style={{ display: "block" }}>
          <Header />
        </div>
        <div style={{ display: "block" }}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <>
                   <Home/>
                  </>
                );
              }}
            ></Route>
            {/* <Route
              exact
              path="/Reload"
              render={() => {
                return (
                  <>
                    <Home/>
                  </>
                );
              }}
            ></Route> */}
            <Route
              exact
              path="/About"
              render={() => {
                return (
                  <>
                    <About />
                    <footer
                      className="bg-dark text-light"
                      style={{
                        margin:0,
                        padding:0,
                        position: "relative",
                        bottom: "100%",
                        textAlign: "center",
                      }}
                    >
                      <p className="text-center">
                        Copyright &copy; WeatherInfo.App
                      </p>
                    </footer>
                  </>
                );
              }}
            ></Route>
            <Route
              exact
              path="/Search"
              render={() => {
                return (
                  <>
                    <FetchData />
                    <footer
                      className="bg-dark text-light"
                      style={{
                        marginTop:"90vh",
                        padding:0,
                        position: "relative",
                        bottom: "100%",
                        textAlign: "center",
                      }}
                    >
                      <p className="text-center">
                        Copyright &copy; WeatherInfo.App
                      </p>
                    </footer>
                  </>
                );
              }}
            ></Route>
            <Route
              exact
              path="/News"
              render={() => {
                return (
                  <>
                    <News />
                    
                  </>
                );
              }}
            ></Route>
            <Route
              exact
              path="/Covid19"
              render={() => {
                return (
                  <>
                    <Covid />
                  </>
                );
              }}
            ></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
