import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg  navbar-light bg-dark">
      <div className="container-fluid  main-div">
        <Link className="navbar-brand title" to="/" style={{color:"white", fontSize: "2rem" }}>
          {props.title}
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{color: "white"}}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Covid19" style={{color: "white"}}>
                Covid19 Tracker
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Search" style={{color: "white"}}>
                Specialised Forecast
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/News" 
              style={{color: "white"}}>
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/About" style={{color: "white"}}>
                About Us
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex"> */}
            <button type="submit"
            style={{width:"10vw",height: "auto",backgroundColor:"green", marginLeft:"4rem",fontSize:"1rem"}}>
              <Link
                className=" "
                to="/Search"
                style={{color: "white",fontSize:"1.2rem"}}
              >
                Search
              </Link>
            </button>
          {/* </form> */}
        </div>
      </div>
    </nav>
  );
}
Header.defaultProps = {
  title: "WeatherInfo",
};
