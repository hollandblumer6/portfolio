import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Website from "../../../assets/images/code-with-me/make-a-website.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import {
  faCircleXmark,
  faLongArrowAltDown,
} from "@fortawesome/free-solid-svg-icons";

const CustomButton = withStyles({
  root: {
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    background: "rgb(247, 247, 247)",
    borderRadius: 3,
    border: 0,
    color: "black",
    width: "100%",
    display: "flex",
    "font-family": "Arial",
    "font-size": "11pt",
    display: "flex",
    "justify-content": "flex-start",
    padding: ".5rem",
  },
  label: {
    textTransform: "capitalize",
  },
})((props) => <Button {...props} />);

function Tutorials() {
  return (
    <div className="tutorials">
      <section>
        <h4> Code with me</h4>
        <article>
          <p>
            {" "}
            Curated tutorials that help viewers learn through storing{" "}
            <b> bite-size </b>
            pieces of information in their mental “folders”- kinda like putting
            laundry away in different drawers and checklists. She strongly
            believes everyone should offer their mindful input to the tech
            movement to improve the world.{" "}
          </p>
        </article>
        <Row className="gy-4 ms-3 me-3">
          <Col>
            <Card
              className="h-100 shadow-sm bg-white border-light rounded img-fluid"
              style={{ width: "20rem" }}
            >
              <Card.Img variant="top" src={Website} />
              <Card.Body>
                <Card.Title> Make a wesbsite </Card.Title>
                <Card.Text> No experience required </Card.Text>
                <Card.Footer>
                  <CustomButton component={Link} to="/make-a-website">
                    Read
                  </CustomButton>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="h-100 shadow-sm bg-white border-light rounded img-fluid"
              style={{ width: "20rem" }}
            >
              <Card.Img variant="top" src={Website} />
              <Card.Body>
                <Card.Title>
                  {" "}
                  Add custom url to website with Github pages
                </Card.Title>

                <br />

                <Card.Footer>
                  <button type="button" className="mt-auto read-more">
                    Read
                  </button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="h-100 shadow-sm bg-white border-light rounded img-fluid"
              style={{ width: "20rem" }}
            >
              <Card.Img variant="top" src={Website} />
              <Card.Body>
                <Card.Title>
                  {" "}
                  Make an advance website with navigation{" "}
                </Card.Title>

                <br />

                <Card.Footer>
                  <button type="button" className="mt-auto read-more">
                    Read
                  </button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          {/*    <Col>
            <Card
              className="h-100 shadow-sm bg-white border-light rounded img-fluid"
              style={{ width: "20rem" }}
            >
              <Card.Img variant="top" src={Website} />
              <Card.Body>
                <Card.Title> How the internet works</Card.Title>

                <br />

                <Card.Footer>
                  <button type="button" className="mt-auto read-more">
                    Read
                  </button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </section>

      <section>
        <h4> Organize tech </h4>
        <article>
          <p>
            {" "}
            Traveling? Waiting? Here are some things you can do to declutter
            your technology.{" "}
          </p>
        </article>

        <Row className="gy-4 ms-3 me-3 mb-5">
          <Col>
            <Card
              className="h-100 shadow-sm bg-white border-light rounded img-fluid"
              style={{ width: "20rem" }}
            >
              <Card.Img variant="top" src={Website} />
              <Card.Body>
                <Card.Title>
                  {" "}
                  Document Oragnization - College Edition{" "}
                </Card.Title>
                <br />

                <Card.Footer>
                  <button type="button" className="mt-auto read-more">
                    Read
                  </button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="h-100 shadow-sm bg-white border-light rounded img-fluid"
              style={{ width: "20rem" }}
            >
              <Card.Img variant="top" src={Website} />
              <Card.Body>
                <Card.Title> Iphone folder structure </Card.Title>
                <Card.Text>
                  {" "}
                  Start organizing when you're waiting on a plane{" "}
                </Card.Text>
                <br />

                <Card.Footer>
                  <Button
                    component={Link}
                    to="/iphone-folders"
                    className="nav-item mt-auto read-more"
                    activeClassName="mt-auto read-more"
                  >
                    Read
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Tutorials;
