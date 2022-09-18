import React from "react";

import {
  Card,
  Button,
  Row,
  Col,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import clip from "../../../assets/images/hair-clip.jpg";

function Wellness() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );
  return (
    <div className="wellness">
      <Row className="gy-4 ms-3 me-3">
        <Col>
          <div className="header-box">
            <h3> FOOD </h3>
            <p>
              {" "}
              Simple dinners and snacks for clean eating. Hover over each card
              to see my suggestions.
            </p>
            <p>
              {" "}
              <a href=""> See more food </a>
            </p>
          </div>
        </Col>

        <Col>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={popover}
          >
            <Card
              className="h-100 shadow-sm bg-white border-light rounded img-fluid"
              style={{ width: "16rem" }}
            >
              <Card.Img
                variant="top"
                src="https://static01.nyt.com/images/2019/01/17/dining/mc-red-lentil-soup/merlin_146234352_d7bc8486-b067-4cff-a4c0-7741f166fb60-articleLarge.jpg?w=1280&q=75"
              />
              <Card.Body>
                <Card.Title> Red Lentil Soup </Card.Title>
                <Card.Text> by Melissa Clark </Card.Text>
                <br />

                <Card.Footer className="mx-auto">
                  <button type="button" className="align-self-end read-more">
                    Read
                  </button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </OverlayTrigger>
        </Col>
        <Col>
          <Card
            className="h-100 shadow-sm bg-white rounded border-light img-fluid"
            style={{ width: "16rem" }}
          >
            <Card.Img
              variant="top"
              src="https://www.tasteofhome.com/wp-content/uploads/2018/01/exps83385_SD163617C01_29_8b-11.jpg?fit=700,1024"
            />
            <Card.Body>
              <Card.Title> Lime-Rosemary Shrimp Skewers </Card.Title>
              <Card.Text>by Taste of Home </Card.Text>

              <Card.Footer className="mx-auto">
                <button type="button" className="mt-auto read-more">
                  Read
                </button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card
            className="h-100 shadow-sm bg-white rounded img-fluid"
            style={{ width: "16rem" }}
          >
            <Card.Img
              variant="top"
              src="https://melissawoodhealth.com/wp-content/uploads/2019/11/1.jpg"
            />
            <Card.Body>
              <Card.Title> Green Juice for Clear Skin </Card.Title>
              <Card.Text>by Melissa Wood Health</Card.Text>
              <Card.Footer>
                <button type="button" className="mt-auto read-more">
                  Read
                </button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        {/* <Col className="mb-5 pt-2"> */}
        <Col>
          <Card
            className="h-100 shadow-sm bg-white rounded img-fluid"
            style={{ width: "16rem" }}
          >
            <Card.Img
              variant="top"
              src="https://www.veggiessavetheday.com/wp-content/uploads/2015/08/Pineapple-Green-Smoothie.jpg"
            />
            <Card.Body>
              <Card.Title> Pineapple Green Smoothie</Card.Title>
              <Card.Text> by Amy Katz </Card.Text>
              <Card.Footer>
                <button type="button" className="mt-auto read-more">
                  Read
                </button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>

        {/*  <Col lg="1" sm="6">
          <button className="more">...</button>
        </Col> */}
      </Row>

      <Row className="gy-4 ms-3 me-3">
        <Col>
          <div className="header-box">
            <h3> Beauty </h3>
            <p> Can't live without </p>
            <p>
              {" "}
              <a href=""> See more beauty </a>
            </p>
          </div>
        </Col>

        <Col>
          <Card
            className="h-100 shadow-sm bg-white rounded img-fluid"
            style={{ width: "16rem" }}
          >
            <Card.Img
              variant="top"
              src="https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYWASH_EU_PDP2_1400x1400.jpg?v=1658378590"
            />
            <Card.Body>
              <Card.Title> The Body Wash </Card.Title>
              <Card.Text> by Necessaire </Card.Text>
              <br />
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
            className="h-100 shadow-sm bg-white rounded img-fluid"
            style={{ width: "16rem" }}
          >
            <Card.Img
              variant="top"
              src="https://www.oribe.com/oribestorefront/medias/1200Wx1200H-400121-3.JPG?context=bWFzdGVyfGltYWdlc3wzOTgwMjF8aW1hZ2UvanBlZ3xoODMvaDFlLzg5NjAxNzAyNjI1NTgvMTIwMFd4MTIwMEhfNDAwMTIxLTMuSlBHfDYwM2ZkZmE2ZTA5Y2NkNjhhMTMyZjNiMDAxOTU3YmQ4N2ZhZDViYmM4ZTRkZjQ2Y2Q1ZTAzNjQ2NjhhMmUxNmE"
            />
            <Card.Body>
              <Card.Title>
                Shampoo and Conditioner for Moisture and Control
              </Card.Title>
              <Card.Text> by Oribe </Card.Text>

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
            className="h-100 shadow-sm bg-white rounded img-fluid"
            style={{ width: "16rem" }}
          >
            <Card.Img
              variant="top"
              src="https://media.ulta.com/i/ulta/2583656?w=720"
            />
            <Card.Body>
              <Card.Title>Micro Brow Pencil</Card.Title>
              <Card.Text> by Bobbi Brown </Card.Text>
              <br />
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
            className="h-100 shadow-sm bg-white rounded img-fluid"
            style={{ width: "16rem" }}
          >
            <Card.Img
              variant="top"
              src="https://cdn.shopify.com/s/files/1/1641/6091/products/WONDER_VALLEY-5_grande.jpg?v=1661196255"
            />
            <Card.Body>
              <Card.Title>Face Oil</Card.Title>
              <Card.Text> by Wonder Valley</Card.Text>
              <br />
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

      <Row className="gy-4 ms-3 me-3">
        <Col>
          <div className="header-box">
            <h3> Style </h3>
            <p> Favorite, Affordable Appliances </p>
            <p>
              {" "}
              <a href=""> See more beauty </a>
            </p>
          </div>
        </Col>

        <Col>
          <Card
            className="h-100 shadow-sm bg-white rounded img-fluid"
            style={{ width: "16rem" }}
          >
            <Card.Img variant="top" src={clip} />
            <Card.Body>
              <Card.Title>Grande Ariel Claw</Card.Title>
              <Card.Text> by Pico Copenhagen</Card.Text>
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
            className="h-100 shadow-sm bg-white rounded img-fluid"
            style={{ width: "16rem" }}
          >
            <Card.Img
              variant="top"
              src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQomXylOUTIZg7z73Uarg573nBwfcO9C3nfLSfT_d9ZY0AsSSwY5RResMb8JXvEoBd3Y5LBRpBwFIaAn5jN9g8YWyU_TcenPA"
            />
            <Card.Body>
              <Card.Title>Hexagon Ear Cuff</Card.Title>
              <Card.Text> by Ragen Jewels</Card.Text>
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
            className="h-100 shadow-sm bg-white rounded img-fluid"
            style={{ width: "16rem" }}
          >
            <Card.Img
              variant="top"
              src="https://pc-ap.rtrcdn.com/productimages/front/1080x/9c/STAHNB14.jpg"
            />
            <Card.Body>
              <Card.Title>Tommy Beaded Leaf Bag</Card.Title>
              <Card.Text> by Staud Accessories</Card.Text>
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
            className="h-100 shadow-sm bg-white rounded img-fluid"
            style={{ width: "16rem" }}
          >
            <Card.Img
              variant="top"
              src="https://cdn-images.farfetch-contents.com/16/93/28/98/16932898_33781215_1000.jpg"
            />
            <Card.Body>
              <Card.Title>Casablanca Earrings</Card.Title>
              <Card.Text> by Isabel Marant </Card.Text>
              <br />
              <Card.Footer>
                {" "}
                <button className="read-more">Read</button>{" "}
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="gy-4 mb-5 ms-3 me-3">
        <Col>
          <div className="header-box">
            <h3> Appliances</h3>
            <p> Favorite, Affordable Appliances </p>
            <p>
              <a href=""> See more appliances </a>
            </p>
          </div>
        </Col>
        <Col>
          <Card
            className="h-100 shadow-sm bg-white rounded img-fluid"
            style={{ width: "16rem" }}
          >
            <Card.Img
              variant="top"
              src="https://m.media-amazon.com/images/I/618t5KpbKsL._AC_SX679_.jpg"
            />
            <Card.Body>
              <Card.Title>
                {" "}
                Celery Juicer Machine Slow Masticating Juicer{" "}
              </Card.Title>
              <Card.Text> by Aeitto</Card.Text>
              <Card.Footer>
                {" "}
                <button className="read-more">Read</button>{" "}
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="h-100 shadow-sm bg-white rounded img-fluid"
            style={{ width: "16rem" }}
          >
            <Card.Img
              variant="top"
              src="https://m.media-amazon.com/images/I/71P0UJP72TL._AC_SY879_.jpg"
            />
            <Card.Body>
              <Card.Title> Air Fryer </Card.Title>
              <Card.Text> by Dreo </Card.Text>
              <br />

              <Card.Footer>
                {" "}
                <button className="read-more">Read</button>{" "}
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Wellness;
