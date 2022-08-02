import React from "react";
import "./Header.css";
import {
  Card,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";

export const LowerMidSection = () => {
  return (
    <div>
      <div
        className="lower-mid-section"
        style={{
          height: "122rem",
          position: "absolute",
          top: "100rem",
          // border:"solid red",
          //   left: "22rem",
          marginTop: "6rem",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            className="International"
            style={{ width: "30rem", marginLeft: "2rem" }}
            className="upper-card1"
          >
            <Card.Link style={{ color: "black", cursor: "pointer" }} href="">
              <h1 className="highlight text-center">International</h1>
            </Card.Link>
            <hr></hr>
            <Card style={{ width: "30rem", height: "37rem",marginLeft:"-0.3rem" }}>
              <Card.Img
                variant="top"
                src="https://th.thgim.com/news/international/bmgcnl/article34471529.ece/ALTERNATES/FREE_960/Bangladesh-boat"
              />

              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <Card.Img
                    variant="top"
                    src="https://img.etimg.com/thumb/msid-82380969,width-300,imgsize-330092,,resizemode-4,quality-100/india-israel-getty.jpg"
                    style={{ width: "8rem", height: "3.5rem" }}
                  />{" "}
                  Israel to send medical aid to India.
                </ListGroupItem>
                <ListGroupItem>
                  <Card.Img
                    variant="top"
                    src="https://s.abcnews.com/images/International/rusesabagina2-file-ap-ml-210415_1618485825811_hpMain_16x9_992.jpg"
                    style={{ width: "8rem", height: "4rem" }}
                  />{" "}
                  How 'Hotel Rwanda' landed behind bars
                </ListGroupItem>
                <ListGroupItem>
                  <Card.Img
                    variant="top"
                    src="https://s.abcnews.com/images/International/funeral-stampede-ap-ps-210430_1619809288859_hpEmbed_3x2_992.jpg"
                    style={{ width: "8rem", height: "4rem" }}
                  />{" "}
                  Americans among 45 dead in Israel stampede
                </ListGroupItem>
              </ListGroup>
            </Card>
          </div>
          <div
            className="National"
            style={{ width: "30rem", marginLeft: "2.5rem" }}
            className="upper-card1"
          >
            <Card.Link style={{ color: "black", cursor: "pointer" }} href="">
              <h1 className="highlight text-center">National</h1>
            </Card.Link>
            <hr></hr>
            <Card style={{ width: "30rem", height: "37rem" ,marginLeft:"-0.2rem"}}>
              <Card.Img
                variant="top"
                src="https://th.thgim.com/news/cities/Coimbatore/6psm9y/article32590075.ece/ALTERNATES/FREE_960/SA13NEET"
              />

              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <Card.Img
                    variant="top"
                    src="https://images.cnbctv18.com/wp-content/uploads/2021/01/vaccine_covaxin-768x432.jpg"
                    style={{ width: "8rem", height: "4rem" }}
                  />{" "}
                  ICMR to get royalty from Covaxin sale
                </ListGroupItem>
                <ListGroupItem>
                  <Card.Img
                    variant="top"
                    src="https://english.cdn.zeenews.com/sites/default/files/2018/12/28/747530-isro-ahmedabad.jpg"
                    style={{ width: "8rem", height: "4rem" }}
                  />{" "}
                  Fire breaks out at ISRO campus in Gujarat.
                </ListGroupItem>
                <ListGroupItem>
                  <Card.Img
                    variant="top"
                    src="https://www.paho.org/sites/default/files/styles/flexslider_full/public/2021-01/covid-19-vaccination-1500-991-2.jpg?h=33d2e14c&itok=nHmyhd3y"
                    style={{ width: "8rem", height: "4rem" }}
                  />{" "}
                  COVID-19: Have you booked a vaccine slot?
                </ListGroupItem>
              </ListGroup>
            </Card>
          </div>
          <div
            className="lower-mid-side-section"
            style={{ position: "absolute", left: "65.5rem" }}
          >
            <Card.Link style={{ color: "black", cursor: "pointer" }} href="">
              <h1 className="highlight text-center">Weather Info</h1>
            </Card.Link>
            <hr />
            <Card
              border="primary"
              style={{ width: "18rem", border: "none" }}
              className="upper-card1"
            >
              <Card.Header>Mississippi</Card.Header>
              <Card.Body>
                <Card.Title>Tornado Outbreak</Card.Title>
                <Card.Text>
                  Tornado outbreak leaves trail of damage across Mississippi
                </Card.Text>
              </Card.Body>
            </Card>
            <br />

            <Card
              border="secondary"
              style={{ width: "18rem", border: "none" }}
              className="upper-card1"
            >
              <Card.Header>San Antonio</Card.Header>
              <Card.Body>
                <Card.Title>Storms</Card.Title>
                <Card.Text>
                  Severe storms unleash golf ball-sized hail near San Antonio,
                  Texas
                </Card.Text>
              </Card.Body>
            </Card>
            <br />

            <Card
              border="success"
              style={{ width: "18rem", border: "none" }}
              className="upper-card1"
            >
              <Card.Header>INDIA</Card.Header>
              <Card.Body>
                <Card.Title>Coronavirus</Card.Title>
                <Card.Text>
                  Coronavirus cases surge across India as seasonable heat
                  persists
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div style={{ display: "flex", position: "absolute", top: "48rem" }}>
          <div
            className="Technology upper-card1"
            style={{ width: "30rem"}}
          >
            <Card.Link style={{ color: "black", cursor: "pointer" }} href="">
              <h1 className="highlight text-center">Technology</h1>
            </Card.Link>
            <hr></hr>
            <Card style={{ width: "30rem", height: "36rem",marginLeft:"-0.1rem" }}>
              <Card.Img
                variant="top"
                src="data:image/jpeg;base64,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"
              />

              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgj7Y0NqN1e2ggOx6WF9XU8cJXt7frtq_Iw&usqp=CAU"
                    style={{ width: "8rem", height: "4rem" }}
                  />{" "}
                  Twitter bans fake COVID-19 posts.
                </ListGroupItem>
                <ListGroupItem>
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLKgx6TjTg6b1WipFRaxJul1BPc2pbkkzfw&usqp=CAU"
                    style={{ width: "8rem", height: "4rem" }}
                  />{" "}
                  Apple launched its new iMAC
                </ListGroupItem>
                <ListGroupItem>
                  <Card.Img
                    variant="top"
                    src="data:image/jpeg;base64,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"
                    style={{ width: "8rem", height: "4rem" }}
                  />
                  Google to go Carbon-free till 2030
                </ListGroupItem>
              </ListGroup>
            </Card>
          </div>
          <div
            className="Business"
            style={{ width: "30rem", marginLeft: "2.5rem" }}
            className="upper-card1"
          >
            <Card.Link style={{ color: "black", cursor: "pointer" }} href="">
              <h1 className="highlight text-center">Business</h1>
            </Card.Link>
            <hr></hr>
            <Card style={{ marginLeft:"-0.1rem",width: "30rem", height: "40rem" }}>
              <Card.Img
                variant="top"
                src="https://th.thgim.com/business/Economy/fcpqz4/article34471382.ece/ALTERNATES/FREE_960/TH---INDIA-ECONOMYPMI"
              />

              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <Card.Img
                    variant="top"
                    src="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/yesbankoffice_660_101918105940_051519023753_160320102939_170320101641_copy_030521115518.jpg"
                    style={{ width: "8rem", height: "4rem" }}
                  />{" "}
                  YES Bank share fell to 13% Today
                </ListGroupItem>
                <ListGroupItem>
                  <Card.Img
                    variant="top"
                    src="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/rakesh_jhunjhunwala_660_090421042745_230421091711.jpg"
                    style={{ width: "8rem", height: "4rem" }}
                  />{" "}
                  Stock held by Rakesh Jhunjhunwala doubled
                </ListGroupItem>
                <ListGroupItem>
                  <Card.Img
                    variant="top"
                    src="https://images.indianexpress.com/2021/05/bse-bombay-stock-exchange-express-photo-1200.jpg"
                    style={{ width: "8rem", height: "4rem" }}
                  />{" "}
                  Sensex slumps 465 points,
                </ListGroupItem>
              </ListGroup>
            </Card>
          </div>
          <div
            className="lower-mid-side-section"
            style={{
              position: "absolute",
              left: "65.5rem",
              height: "51rem",
              marginTop: ".5rem",
            }}
          >
            <Card.Link style={{ color: "black", cursor: "pointer" }} href="">
              <h2 className="highlight text-center" style={{fontSize:"2.3rem"}}>From the Region</h2>
            </Card.Link>
            <hr />
            <Card
              className="upper-card1"
              style={{ width: "18rem",border:"solid black", marginBottom: ".5rem", height: "11rem" }}
            >
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>Delhi</Card.Title>
                <Card.Text>
                  Delhi Covid lockdown news live: 'City to receive 244 tonnes of
                  oxygen tomorrow'
                </Card.Text>
                <Card.Link href="#" >Read More</Card.Link>
              </Card.Body>
            </Card>
            <Card
              className="upper-card1"
              style={{ width: "18rem", marginBottom: ".5rem", height: "14rem",border:"solid black" }}
            >
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>
                  Chandigarh
                </Card.Title>
                <Card.Text>
                  Chandigarh Administrator VP Singh Badnore on Tuesday announced
                  that all beneficiaries including those above 18 years will be
                  vaccinated for free of cost.
                </Card.Text>
                <Card.Link href="#">Read More</Card.Link>
              </Card.Body>
            </Card>
            <Card
              style={{ width: "18rem", height: "14rem" ,border:"solid black"}}
              className="upper-card1"
            >
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>Haryana</Card.Title>
                <Card.Text>
                  The Haryana government on Friday imposed weekend lockdown in
                  nine districts — Panchkula, Gurugram, Faridabad, Sonipat,
                  Rohtak, Karnal, Hisar, Sirsa, and Fatehabad
                </Card.Text>
                <Card.Link href="#">Read More</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div
          className="final-lower-mid"
          style={{
            position: "absolute",
            top: "94rem",
            width: "84rem",
            height: "5rem",
          }}
        >
          <Card style={{border:"solid black"}}>
            <Card.Header className="highlight text-center">Quote</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  Design is not just what it looks like and feels like. Design
                  is how it works.
                </p>
                <footer className="blockquote-footer">
                  <cite title="Source Title" style={{ marginTop: "2rem" }}>
                    Steve Jobs
                  </cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </div>
        <div
          className="final-lower-mid"
          style={{ position: "absolute", top: "108rem", width: "84rem" }}
        >
          <Card style={{border:"solid black"}}>
            <Card.Header className="highlight text-center">Quote</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  I think a simple rule of business is, if you do the things
                  that are easier first, then you can actually make a lot of
                  progress
                </p>
                <footer className="blockquote-footer">
                  <cite title="Source Title">Mark Zuckeberg</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
