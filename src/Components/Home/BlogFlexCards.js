import React from "react";
import { Link } from "react-router-dom";
import "./BlogFlexCards.css";

export const BlogFlexCards = () => {
  return (
    <div
      style={{
        margin: "0",
        padding: "0",
        width: "100%",
        backgroundColor: "black",
        fontFamily: "sans-serif",
        fontSize: "2.5rem",
        color: "cyan",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
        // lineHeight: "1.3",
      }}
    >
      <h1
        className="heading1 bg-dark text-center"
        style={{ fontSize: "3rem" }}
      >
        Weather Blogs
      </h1>
      <Link to="/" className="my-card">
        <div
          classname="my-card-image"
          style={{
            display: "block",
            backgroundImage:
              'url("https://cms.accuweather.com/wp-content/uploads/2021/04/PUBLIC-WINNER-FIRST-PLACE-2020-2468-Baikal-Treasure-%C2%A9-Alexey-Trofimov.jpg?w=1440")',
            backgroundSize: "contain",
            width: "40vw",
            height: "200px",
          }}
        ></div>
        The most breath-taking view you will ever see!
        {/* <div classname="my-card-content" style={{ borderTop: "solid blue" }}>
          <div classname="my-card-title" style={{ fontSize: "2.5rem",color:"cyan" }}>
            The most breath-taking view you will ever see!
          </div>
          <div classname="my-card-snippet">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            iste similique molestias necessitatibus nulla commodi sunt
            aliquam...
          </div>
          <div classname="my-card-readmore">Read More</div>
        </div> */}
      </Link>
      <Link to="/" className="my-card">
        <div
          classname="my-card-image"
          style={{
            backgroundImage:
              'url("https://s.w-x.co/util/image/w/in-thursday_2_0.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60")',
            width: "40vw",
            height: "200px",
            backgroundSize: "contain",
          }}
        ></div>
        Across India Witness 5 Day Precipitation Accumulation(in mm) From
        Thursday To Monday
        {/* <div classname="my-card-content" style={{ borderTop: "solid blue" }}>
          <div classname="my-card-title" style={{ fontSize: "2.5rem",color:"cyan" }}>
            The most breath-taking view you will ever see!
          </div>
          <div classname="my-card-snippet">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            iste similique molestias necessitatibus nulla commodi sunt
            aliquam...
          </div>
          <div classname="my-card-readmore">Read More</div>
        </div> */}
      </Link>
      <Link to="/" className="my-card">
        <div
          classname="my-card-image"
          style={{
            backgroundImage:
              'url("https://cms.accuweather.com/wp-content/uploads/2021/04/MicrosoftTeams-image-11-3.jpg?w=632")',
            width: "40vw",
            backgroundSize: "contain",
            height: "200px",
          }}
        ></div>
        Mother Nature cranking up the heat in southwestern US
        {/* <div classname="my-card-content" style={{ borderTop: "solid blue" }}>
          <div classname="my-card-title" style={{ fontSize: "2.5rem",color:"cyan" }}>
            Mother Nature cranking up the heat in southwestern US
          </div>
          <div classname="my-card-snippet">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            iste similique molestias necessitatibus nulla commodi sunt
            aliquam...
          </div>
          <div classname="my-card-readmore">Read More</div>
        </div> */}
      </Link>
      <Link to="/" className="my-card">
        <div
          classname="my-card-image"
          style={{
            backgroundImage:
              'url("https://cms.accuweather.com/wp-content/uploads/2021/04/WindNEIntoFriEve30Apr9a.jpg?w=632")',
            width: "40vw",
            height: "200px",
            backgroundSize: "contain",
          }}
        ></div>
        Gusty winds 50 mph or higher to rip through Northeast
        {/* <div classname="my-card-content" style={{ borderTop: "solid blue" }}>
          <div classname="my-card-title" style={{ fontSize: "2.5rem",color:"cyan" }}>
            Gusty winds 50 mph or higher to rip through Northeast
          </div>
          <div classname="my-card-snippet">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            iste similique molestias necessitatibus nulla commodi sunt
            aliquam...
          </div>
          <div classname="my-card-readmore">Read More</div>
        </div> */}
      </Link>
      <h1
        className="heading1 bg-dark text-center"
        style={{ fontSize: "3rem" }}
      >
        More Blogs and News <Link to="/News">CLick here</Link>
      </h1>
    </div>
  );
};
