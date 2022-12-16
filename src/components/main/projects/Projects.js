import React from "react";
import Wellness3 from "../wellness/Wellness3";
import Portfolio from "../../../assets/images/portfolio-about.png";
import WellnessImage from "../../../assets/images/portfolio-wellness.png";
import Temp1 from "../../../assets/images/temp1.png";
import Temp2 from "../../../assets/images/temp2.png";
import Helios1 from "../../../assets/images/helios1.png";
import Helios2 from "../../../assets/images/helios2.png";
// import { Carousel } from "react-responsive-carousel";
import { Carousel } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
              Currently working on a sustainability social application that
              simplifies communication efforts between brands and customers. The
              algorithm groups together similar suggestions from customers and
              filters out trivial content. It also provides a channel for brands
              to market their their sustainability efforts.
            </p>
            <p>
              {" "}
              So far, there are three accounts - a user, business, and admin
              profile. The user account features the brands that the user
              supports on the platform. The business account features the top
              suggestions that consumers have provided as well as the milestones
              set out to address suggestions. Working with Amplify and planning
              the structure of the app have been the biggest challenges.
            </p>
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
            students at Dartmouth, I was tasked to make a web application for
            employees at
            <b> ChargePoint </b>to monitor and flag manufacturing procesees from
            remote locations. My team and I traveled to Chargepoint's
            headquarters in Campbell, CA to test and present updates each
            quarter.
          </p>
          <p>
            {" "}
            AWS Cognito, Amplify, and DynamoDB were used to construct the web
            application. A ChargePoint employee must sign in to view dashboard
            that features top metrics, top errors, recent errors, employee
            notes, searchable data table. Additionally, there is a charger
            schema tab where employees can view the raw images captured on the
            production line.{" "}
          </p>
        </article>

        <article>
          <div className="portfolio-content">
            {" "}
            <Carousel interval={null}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Helios2}
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
            <b> Bootstrap </b>library. Packages such as{" "}
            <b>react-router-dom v6 </b> and <b>react-bootstrap </b> were
            imported to enhance the site. Additionally,
            <b> overlay-triggers</b> were incorporated to reduce the number of
            clicks as well as <b>row, col, and card components</b>.
          </p>
          <p>
            {" "}
            Components were subdivided into different folders within the
            components folder to maintain good organization and flow. This
            project was made completely on the front end and may need tools such
            as google analytics to monitor traction.{" "}
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
                  src={WellnessImage}
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
