import React from "react";
import "./Header.css";

import {
  Card,
  Carousel,
  ListGroupItem,
  ListGroup,
  Button,
  Form,
  Col,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagramSquare,
  faLinkedinIn,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div>
      <div
        className="footer"
        style={{
          position: "relative",
          top: "245rem",
          //   left: "20rem",
          display: "flex",
          flexDirection: "column",
          height: "38rem",
          border: "solid blue",
        }}
      >
        <div
          className="footer-top"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "98vw",
            height: "20rem",
            position: "absolute",
            // border: "solid blue",
            // right: "35rem",
          }}
        >
          <div
            className="social-links"
            style={{
              display: "flex",
              width: "13rem",
              marginLeft: "2rem",
              justifyContent: "space-around",
            }}
          >
            <div className="icon">
              <a href="https://facebook.com/" target="_blank">
                <FontAwesomeIcon
                  style={{
                    height: "3rem",
                    width: "3rem",
                    color: "cyan",
                    cursor: "pointer",
                    marginLeft: "1rem",
                    marginTop: "3rem",
                    marginBottom: "1rem",
                  }}
                  icon={faFacebook}
                />
              </a>
            </div>
            <div className="icon">
              <a href="https://instagram.com/" target="_blank">
                <FontAwesomeIcon
                  style={{
                    height: "3rem",
                    width: "3rem",
                    color: "cyan",
                    cursor: "pointer",
                    marginLeft: "1rem",
                    marginTop: "3rem",
                    marginBottom: "1rem",
                  }}
                  icon={faInstagramSquare}
                />
              </a>
            </div>
            <div className="icon">
              <a href="https://linkedin.com/" target="_blank">
                <FontAwesomeIcon
                  style={{
                    height: "3rem",
                    width: "3rem",
                    color: "cyan",
                    cursor: "pointer",
                    marginLeft: "1rem",
                    marginTop: "3rem",
                    marginBottom: "1rem",
                  }}
                  icon={faLinkedinIn}
                />
              </a>
            </div>
            <div className="icon">
              <a href="https://twitter.com/" target="_blank">
                <FontAwesomeIcon
                  style={{
                    height: "3rem",
                    width: "3rem",
                    color: "cyan",
                    cursor: "pointer",
                    marginLeft: "1rem",
                    marginTop: "3rem",
                    marginBottom: "1rem",
                  }}
                  icon={faTwitterSquare}
                />
              </a>
            </div>
          </div>
          <div
            className="title"
            style={{
              //   border: "solid voilet",
              width: "10rem",
              marginTop: "3rem",
            }}
          >
            <h3 className="highlight">WeatherInfo</h3>
          </div>
          <div
            // className="search"
            style={{
              width: "20rem",
              marginTop: "3rem",
              // border:"solid red"
            }}
          >
            <Form>
              <Form.Row className="align-items-center">
                <Col xs="auto">
                  <Form.Label htmlFor="inlineFormInput" srOnly>
                    Name
                  </Form.Label>
                  <Form.Control
                    style={{
                      width: "15rem",
                      marginLeft: "-4rem",
                      height: "3rem",
                      fontSize: "2rem",
                    }}
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="Search"
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    style={{
                      width: "8rem",
                      height: "3rem",
                      fontSize: "1.5rem",
                      padding: "0.5rem",
                      backgroundColor: "green",
                    }}
                    type="submit"
                    // className="mb-2"
                  >
                    Search
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </div>
        </div>
        <hr
          style={{
            position: "absolute",
            marginTop: "5rem",
            width: "84rem",
            top: "1.8rem",
            color: "blue",
          }}
        />
        <div
          className="footer-mid"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "98vw",
            height: "20rem",
            position: "absolute",
            top: "11rem",
          }}
        >
          <div className="trending-today">
            <Card
              style={{
                width: "18rem",
                height: "20rem",
                border: "solid black",
                cursor: "pointer",
                maxWidth: "100vw",
              }}
              className="upper-card1"
            >
              <Card.Header>
                <h4>Trending Today</h4>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>COVID-19 spreading rapidly</ListGroup.Item>
                <ListGroup.Item>
                  HC denies construction of New Parliament
                </ListGroup.Item>
                <ListGroup.Item>Death toll rises this month</ListGroup.Item>
                <ListGroup.Item>BJP swept Out by TMC</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
          <div className="trending-today">
            <Card
              style={{
                width: "18rem",
                height: "23rem",
                border: "solid black",
                cursor: "pointer",
              }}
              className="upper-card1"
            >
              <Card.Header>
                <h4>Trending International</h4>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Dubai optimistic visitors will return
                </ListGroup.Item>
                <ListGroup.Item>
                  US: Mexico City overpass collapse kills at least 15
                </ListGroup.Item>
                <ListGroup.Item>
                  Is it over yet? Still no recession end date as U.S. economy
                  hums along
                </ListGroup.Item>
                <ListGroup.Item>
                  Saudi Arabia expected to cut June crude prices
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
          <div className="trending-today">
            <Card
              style={{
                width: "18rem",
                height: "22rem",
                border: "solid black",
                cursor: "pointer",
              }}
              className="upper-card1"
            >
              <Card.Header>
                <h4>Trending on Groups</h4>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>UAE extends suspension of entry</ListGroup.Item>
                <ListGroup.Item>
                  UAE non-oil private sector keeps growing
                </ListGroup.Item>
                <ListGroup.Item>
                  Ikea meets Lego is Google’s idea of tomorrow’s workplace
                </ListGroup.Item>
                <ListGroup.Item>
                  COVAX gets boost from Moderna deal
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
          <div className="trending-today">
            <Card
              style={{
                width: "18rem",
                height: "24rem",
                border: "solid black",
                cursor: "pointer",
              }}
              className="upper-card1"
            >
              <Card.Header>
                <h4>Trending in India</h4>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Man steals sanitiser from ATM kiosk.
                </ListGroup.Item>
                <ListGroup.Item>
                  Woman teaches her pet puppies to pray before meal.
                </ListGroup.Item>
                <ListGroup.Item>
                  Harsh Goenka shares life lessons from Anand Mahindra.
                </ListGroup.Item>
                <ListGroup.Item>
                  Artist recreates Satyajit Ray's film posters on 100th birth
                  anniversary to depict Covid crisis
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
          <hr />
        </div>
        <h1
          className="text-light bg-dark text-center"
          style={{
            display: "block",
            height: "2.5rem",
            marginTop: "0rem",
            padding: "0.25rem",
            fontSize: "1.5rem",
          }}
        >
          <p className="text-center">Copyright &copy; WeatherInfo.App</p>
        </h1>
      </div>
    </div>
  );
};
