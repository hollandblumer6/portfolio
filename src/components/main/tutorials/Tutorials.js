import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Website from "../../../assets/images/code-with-me/make-a-website.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Tutorials() {
  return (
    <div className="tutorials">
      <section>
        <article>
          <h3> Code with me</h3>
          <p> This is a intensive ... </p>
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

                <Button
                  component={Link}
                  to="/make-a-website"
                  className="nav-item mt-auto read-more"
                  activeClassName="mt-auto read-more"
                >
                  Read
                </Button>
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
                <Card.Title> Consistent routine </Card.Title>

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
                <Card.Title> Red Lentil Soup </Card.Title>

                <br />

                <Card.Footer>
                  <button type="button" className="mt-auto read-more">
                    Read
                  </button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section>
        <article>
          <h3> Organize with me</h3>
          <p> This is a intensive ... </p>
        </article>

        <Row className="gy-4 ms-3 me-3 mb-5">
          <Col>
            <Card
              className="h-100 shadow-sm bg-white border-light rounded img-fluid"
              style={{ width: "20rem" }}
            >
              <Card.Img variant="top" src={Website} />
              <Card.Body>
                <Card.Title> Make a website in 14 minutes </Card.Title>
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
                <Card.Title> Red Lentil Soup </Card.Title>
                <Card.Text> by Melissa Clark </Card.Text>
                <br />

                <Card.Footer>
                  <button type="button" className="mt-auto read-more">
                    Read
                  </button>
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
