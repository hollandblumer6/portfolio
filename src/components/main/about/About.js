import React from "react";
import Temp from "../../../assets/images/temp-headshot-marsh.JPG";
import Test from "./Test";

function About() {
  return (
    <div className="about">
      <section>
        <h4> ABOUT HOLLAND </h4>
        <article>
          <p>
            {" "}
            Holland Blumer views technology as the secret ingredient to
            enhancing communication and sustainability efforts. With two
            engineering degrees from <b>Northwestern University </b>(B.S.) and
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
            <p>
              <b> Certicate in Algorithmic Trading</b> by University of Oxford
              Saïd Business School
            </p>
            <p>
              <b> Meta Front-End Developer Professional Certificate</b> by
              Coursera
            </p>
            <p>
              <b> Meta Back-End Developer Professional Certificate</b> by
              Coursera (TBD)
            </p>
          </p>

          <br />
          <p>
            <i>
              {" "}
              Download resume <a href=""> here</a>{" "}
            </i>
          </p>
        </article>

        <img src={Temp} className="profile-image"></img>
      </section>
    </div>
  );
}

export default About;
