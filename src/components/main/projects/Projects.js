import React from "react";
import Wellness3 from "../wellness/Wellness3";
import Portfolio from "../../../assets/images/portfolio-about.png";
// import { Carousel } from "react-responsive-carousel";
import { Carousel } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Divot from "../../../assets/images/code-with-me/divot.jpg";

function Projects() {
  return (
    <div className="projects">
      <section>
        <article>
          <br /> <h3> Sustainability </h3> <br />{" "}
          <p> This is a intensive ... </p>
        </article>
        <article>
          <div className="portfolio-content">
            {" "}
            <Carousel>
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
            {/*      <Carousel width="60vw" dynamicHeight={false} thumbWidth="10vw">
              <div>
                <img src={Divot} />
                <p className="legend">This is blah blah</p>
              </div>
              <div>
                <img src={Portfolio} />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src={Portfolio} />
                <p className="legend">Legend 3</p>
              </div>
            </Carousel> */}
          </div>
        </article>
      </section>

      <section>
        <h4> Manufacturing </h4>
        <article>
          <p> This is a intensive ... </p>
        </article>

        <article>
          <div className="portfolio-content">
            {" "}
            <Carousel
              width="60vw"
              dynamicHeight={false}
              thumbWidth="10vw"
              centerMode="true"
            >
              <div>
                <img src={Portfolio} />
                <p className="legend">This is blah blah</p>
              </div>
              <div>
                <img src={Portfolio} />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src={Portfolio} />
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>
          </div>
        </article>
      </section>

      <section>
        <h4> Personal </h4>
        <article>
          <h3> Personal </h3>
          <p> This is a intensive ... </p>
        </article>

        <article>
          <div className="portfolio-content">
            {" "}
            <Carousel
              width="60vw"
              dynamicHeight={false}
              thumbWidth="10vw"
              centerMode="true"
            >
              <div>
                <img src={Portfolio} />
                <p className="legend">This is blah blah</p>
              </div>
              <div>
                <img src={Portfolio} />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src={Portfolio} />
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>
          </div>
        </article>
      </section>
      <Wellness3 />
    </div>
  );
}

export default Projects;
