import React from "react";
import Wellness3 from "../wellness/Wellness3";
import Portfolio from "../../../assets/images/portfolio-about.png";
import Temp1 from "../../../assets/images/temp1.png";
import Temp2 from "../../../assets/images/temp2.png";
import Helios1 from "../../../assets/images/helios1.png";
// import { Carousel } from "react-responsive-carousel";
import { Carousel } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Divot from "../../../assets/images/code-with-me/divot.jpg";
import { Col, Row } from "react-bootstrap";
function Projects() {
  return (
    <div className="projects">
      <section>
        <h4> Sustainability App </h4>
        <article className="column-article">
          {/* <h3> Divot </h3> */}

          <div>
            <p>
              {" "}
              This app simplifies communication efforts between brands and
              customers. At the moment, its focus is on sustainability. The
              algorithm groups together similar suggestions and filters out
              impractical content. It is not only a way for users to voice their
              opinions but also a way for brands to showcase their efforts.
            </p>
            <p>
              {" "}
              So far, there are two accounts, a user and business account. The
              user account features the brands that the user supports on the
              platform. The business account features the top suggestions that
              consumers have provided as well as the milestones set out to
              address the suggestion.
            </p>
            <b> Looking to hire back-end engineers </b>
          </div>
        </article>
        <article>
          <div className="portfolio-content">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100 " src={Temp2} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Temp1} alt="Second slide" />
              </Carousel.Item>
            </Carousel>
          </div>
        </article>
      </section>

      <section>
        <h4> Manufacturing App</h4>
        <article>
          <p>
            {" "}
            As the <b>full-stack developer</b> on a team of engineering grad
            students at Dartmouth, I was tasked to make a platform for employees
            at
            <b> ChargePoint </b>to monitor and flag manufacturing procesees from
            remote locations. This six-month long project paid off.
          </p>
          <p>
            {" "}
            This web application started with the approach. is a intensive Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.{" "}
          </p>
        </article>

        <article>
          <div className="portfolio-content">
            {" "}
            <Carousel interval={null}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Helios1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Helios1}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </article>
      </section>

      <section>
        <h4> Personal App </h4>
        <article>
          <p>
            {" "}
            <b>Hollandblumer.com </b>was created using the <b>React</b>{" "}
            framework and
            <b> Bootstrap </b>library. is a intensive Lorem ipsum dolor sit
            amet, <b>consectetur</b> adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.{" "}
          </p>
          <p>
            {" "}
            This web application started with the approach. is a intensive Lorem
            ipsum dolor sit amet, <b>consectetur</b> adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </article>

        <article>
          <div className="portfolio-content">
            {" "}
            <Carousel interval={null}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Portfolio}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Portfolio}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Portfolio}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </article>
      </section>
      <Wellness3 />
    </div>
  );
}

export default Projects;
