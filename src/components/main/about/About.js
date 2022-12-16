import React from "react";
import Temp from "../../../assets/images/temp-headshot.png";
import Test from "./Test";
import { OverlayTrigger, Popover } from "react-bootstrap";
import AlgoTrading from "../../../assets/images/algo-trading.png";
import PythonDeveloper from "../../../assets/images/python-developer.png";
import PDF from "../../../assets/holland-blumer-resume.pdf";

function About() {
  const popover_algo = (
    <Popover id="popover-basic">
      <Popover.Body>
        <img src={AlgoTrading} className="popover-img" />
      </Popover.Body>
    </Popover>
  );

  const popover_python = (
    <Popover id="popover-basic">
      <Popover.Body>
        <img src={PythonDeveloper} className="popover-img" />
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="about">
      <section>
        <h4> ABOUT HOLLAND </h4>
        <article>
          <p>
            {" "}
            Holland Blumer views technology as the platform to enhance
            communication and sustainability efforts. With two engineering
            degrees from <b>Northwestern University </b>(B.S.) and
            <b> Dartmouth College </b>(M.Eng) under her belt, experience in
            Silicon Valley, and in the automotive industry, she has a solid
            grasp of the ever-evolving technological field, and her mission is
            to leverage technology to improve communication, sustainability, and
            accessibility efforts globally.
          </p>
          <br />
          <p>
            {" "}
            <i>Hover to see certificate image below </i>
          </p>

          <p>
            <OverlayTrigger
              placement="top"
              delay={{ show: 0, hide: 0 }}
              overlay={popover_algo}
            >
              <p>
                <b> Certicate in Algorithmic Trading</b> by University of Oxford
                Saïd Business School
              </p>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              delay={{ show: 0, hide: 0 }}
              overlay={popover_python}
            >
              <p>
                <b> Become a Python Developer </b> by LinkedIn
              </p>
            </OverlayTrigger>

            <p>
              <b> Meta Back-End Developer Professional Certificate</b> by
              Coursera (TBD)
            </p>
          </p>

          <br />
          <p>
            {" "}
            Download resume{" "}
            <a
              className="resume-link"
              href={PDF}
              download="Holland_Blumer_Resume.pdf"
            >
              <b>here</b>
            </a>{" "}
          </p>
        </article>

        <img src={Temp} className="profile-image"></img>
      </section>
    </div>
  );
}

export default About;
