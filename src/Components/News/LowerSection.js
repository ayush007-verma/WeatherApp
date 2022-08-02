import React from "react";
import "./Header.css";


export const LowerSection = () => {
  return (
    <div>
      <div
        className="lower-section"
        style={{
          position: "absolute",
          top: "230rem",
          // left: "20rem",
          display: "flex",
          flexDirection: "column",
          height: "50rem",
        }}
      >
        <div
          className="business"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginBottom: "1.2rem",
          }}
        >
          <div>
            <a href="#" class="link-dark">
              <h2 className="highlight ">Business</h2>
            </a>
          </div>
          <div style={{ marginLeft: "0.5rem", width: "50rem" }}>
            <hr />
          </div>
          <div
            style={{ position: "absolute", marginLeft: "85rem", width: "16rem" }}
          >
            <a href="#" class="link-dark">
              <h4 className="highlight text-center">Show All</h4>
            </a>
          </div>
        </div>
        <div
          className="business"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginBottom: "1.2rem",
          }}
        >
          <div style={{ marginLeft: "1rem" }}>
            <a href="#" class="link-dark">
              <h2 className="highlight ">Technology</h2>
            </a>
          </div>
          <div style={{ marginLeft: "0.5rem", width: "50rem" }}>
            <hr />
          </div>
          <div
            style={{ position: "absolute", marginLeft: "85rem", width: "16rem" }}
          >
            <a href="#" class="link-dark">
              <h4 className="highlight text-center">Show All</h4>
            </a>
          </div>
        </div>
        <div
          className="business"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginBottom: "1.2rem",
          }}
        >
          <div style={{ marginRight: "3rem" }}>
            <a href="#" class="link-dark">
              <h2 className="highlight ">States</h2>
            </a>
          </div>
          <div style={{ marginLeft: "0.5rem", width: "50rem" }}>
            <hr />
          </div>
          <div
            style={{ position: "absolute", marginLeft: "85rem", width: "16rem" }}
          >
            <a href="#" class="link-dark">
              <h4 className="highlight text-center">Show All</h4>
            </a>
          </div>
        </div>
        <div
          className="business"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginBottom: "1.2rem",
          }}
        >
          <div style={{ marginRight: "4rem" }}>
            <a href="#" class="link-dark">
              <h2 className="highlight ">Cities</h2>
            </a>
          </div>
          <div style={{ marginLeft: "0.5rem", width: "50rem" }}>
            <hr />
          </div>
          <div
            style={{ position: "absolute", marginLeft: "85rem", width: "16rem" }}
          >
            <a href="#" class="link-dark">
              <h4 className="highlight text-center">Show All</h4>
            </a>
          </div>
        </div>
        <div
          className="business"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginBottom: "1.2rem",
          }}
        >
          <div style={{ marginRight: "0.8rem" }}>
            <a href="#" class="link-dark">
              <h2 className="highlight ">Trending</h2>
            </a>
          </div>
          <div style={{ marginLeft: "0.5rem", width: "50rem" }}>
            <hr />
          </div>
          <div
            style={{ position: "absolute", marginLeft: "85rem", width: "16rem" }}
          >
            <a href="#" class="link-dark">
              <h4 className="highlight text-center">Show All</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
