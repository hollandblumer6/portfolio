import { React, useState } from "react";
import {
  Card,
  Button,
  Row,
  Col,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";

function Wellness() {
  const [showFood, setShowFood] = useState(false);
  const [showBeauty, setShowBeauty] = useState(false);
  const [showStyle, setShowStyle] = useState(false);
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Recommendation</Popover.Header>
      <Popover.Body>
        Add <strong>lemon</strong>
      </Popover.Body>
    </Popover>
  );

  const popovertop = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Recommendation</Popover.Header>
      <Popover.Body>
        Serve with <strong>couscous</strong>
      </Popover.Body>
    </Popover>
  );

  const popoverend = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Recommendation</Popover.Header>
      <Popover.Body>
        <li>
          {" "}
          <b>1 cup </b> fresh squeezed orange juice{" "}
        </li>{" "}
        <li>
          {" "}
          <b>Handful </b>of baby spinach{" "}
        </li>
        <li> Frozen pineapple </li>
        <li> Frozen peaches </li>
        <li>
          {" "}
          <b>2 cups</b> water{" "}
        </li>
      </Popover.Body>
    </Popover>
  );

  const popovertofu = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Recommendation</Popover.Header>
      <Popover.Body>
        Add to everything bagel with tomato, lettuce, and onion
      </Popover.Body>
    </Popover>
  );

  const popoverdates = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Recommendation</Popover.Header>
      <Popover.Body>
        Prefer the medjool dates <strong>with pits</strong>.
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
              to view my suggestions.
            </p>
            <p>
              {" "}
              <div onClick={() => setShowFood(!showFood)}>
                {" "}
                {showFood ? (
                  <div className="show-less-button">Show less food </div>
                ) : (
                  <div className="show-more-button">See more food</div>
                )}{" "}
              </div>
            </p>
          </div>
        </Col>

        <Col>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 0, hide: 0 }}
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
                <form
                  target="_blank"
                  action="https://cooking.nytimes.com/recipes/1016062-red-lentil-soup-with-lemon"
                >
                  <button type="submit" className="align-self-end read-more">
                    <Card.Footer type="submit" className="mx-auto">
                      Read
                    </Card.Footer>
                  </button>
                </form>
              </Card.Body>
            </Card>
          </OverlayTrigger>
        </Col>
        <Col>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 0, hide: 0 }}
            overlay={popovertop}
          >
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

                <form
                  target="_blank"
                  action="https://www.tasteofhome.com/recipes/lime-rosemary-shrimp-skewers/"
                >
                  <button type="submit" className="align-self-end read-more">
                    <Card.Footer type="submit" className="mx-auto">
                      Read
                    </Card.Footer>
                  </button>
                </form>
              </Card.Body>
            </Card>
          </OverlayTrigger>
        </Col>

        <Col>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 0, hide: 0 }}
            overlay={popoverend}
          >
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

                <form
                  target="_blank"
                  action="https://www.veggiessavetheday.com/pineapple-green-smoothie/"
                >
                  <button type="submit" className="align-self-end read-more">
                    <Card.Footer type="submit" className="mx-auto">
                      Read
                    </Card.Footer>
                  </button>
                </form>
              </Card.Body>
            </Card>
          </OverlayTrigger>
        </Col>

        {showFood ? (
          <>
            {" "}
            <Row className="gy-4 ms-2 me-3">
              <Col></Col>
              <Col>
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 0, hide: 0 }}
                  overlay={popovertofu}
                >
                  <Card
                    className="h-100 shadow-sm bg-white rounded img-fluid"
                    style={{ width: "16rem" }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://images.squarespace-cdn.com/content/v1/60e4afc6bb25b901d3c4d04b/de78bb48-ee93-4cd3-8ce0-e298ab5d6462/BTCCHerbsChive300-Certs.png?format=750w"
                    />
                    <Card.Body>
                      <Card.Title> Herbs & Chive Tofu Cream Cheese </Card.Title>
                      <Card.Text> by Tofutti </Card.Text>

                      <form
                        target="_blank"
                        action="https://www.tofutti.com/dairy-free-cream-cheese-herbs-and-chive"
                      >
                        <button
                          type="submit"
                          className="align-self-end read-more"
                        >
                          <Card.Footer type="submit" className="mx-auto">
                            Read
                          </Card.Footer>
                        </button>
                      </form>
                    </Card.Body>
                  </Card>
                </OverlayTrigger>
              </Col>
              <Col>
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 0, hide: 0 }}
                  overlay={popoverdates}
                >
                  <Card
                    className="h-100 shadow-sm bg-white rounded img-fluid"
                    style={{ width: "16rem" }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://cdn.shopify.com/s/files/1/0053/5786/3015/products/3_5b2bd338-969f-4c79-a4ef-24a07005e661_1024x1024.png?v=1626632498"
                    />
                    <Card.Body>
                      <Card.Title> Organic Medjool Dates </Card.Title>

                      <Card.Text> by Joolies</Card.Text>
                      <br />
                      <form
                        target="_blank"
                        action="https://joolies.com/collections/all/products/joolies-organic-medjool-dates-jumbo-grade-whole-fruit-2kg-california-grown-large-box-special-occasion-and-gifting"
                      >
                        <button
                          type="submit"
                          className="align-self-end read-more"
                        >
                          <Card.Footer type="submit" className="mx-auto">
                            Read
                          </Card.Footer>
                        </button>
                      </form>
                    </Card.Body>
                  </Card>
                </OverlayTrigger>
              </Col>
            </Row>
          </>
        ) : (
          <></>
        )}

        {/*  <Col lg="1" sm="6">
          <button className="more">...</button>
        </Col> */}
      </Row>

      <Row className="gy-4 ms-3 me-3">
        <Col>
          <div className="header-box">
            <h3> Beauty </h3>
            <p> Highly recommend these beauty products.</p>
            <p>
              {" "}
              <div onClick={() => setShowBeauty(!showBeauty)}>
                {" "}
                {showBeauty ? (
                  <div className="show-less-button">Show less beauty </div>
                ) : (
                  <div className="show-more-button">See more beauty</div>
                )}{" "}
              </div>
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
              src="https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYWASH_EU_PDP_1400x1400.jpg?v=1674176084"
            />
            <Card.Body>
              <Card.Title> The Body Wash </Card.Title>
              <Card.Text> by Necessaire </Card.Text>
              <br />
              <br />
              <form
                target="_blank"
                action="https://necessaire.com/products/the-body-wash?variant=31475908051057"
              >
                <button type="submit" className="align-self-end read-more">
                  <Card.Footer type="submit" className="mx-auto">
                    Read
                  </Card.Footer>
                </button>
              </form>
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

              <form
                target="_blank"
                action="https://www.oribe.com/oribestorefront/oribe/en/-/Collections/Moisture-%26-Control/Shampoo-for-Moisture-%26-Control/p/400121?st-code=&gclid=CjwKCAiAv9ucBhBXEiwA6N8nYJVShYHeEBq6CEfp6JEF7E0LvvKv3J9Cs_sDxuxOdBZsZCSR_VOPRBoCxkEQAvD_BwE"
              >
                <button type="submit" className="align-self-end read-more">
                  <Card.Footer type="submit" className="mx-auto">
                    Read
                  </Card.Footer>
                </button>
              </form>
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

              <form
                target="_blank"
                action="https://welcometowondervalley.com/products/face-oil"
              >
                <button type="submit" className="align-self-end read-more">
                  <Card.Footer type="submit" className="mx-auto">
                    Read
                  </Card.Footer>
                </button>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {showBeauty ? (
        <Row>
          <Col></Col>{" "}
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

                <form
                  target="_blank"
                  action="https://www.bobbibrowncosmetics.com/product/2327/79625/makeup/eyes/brows/micro-brow-pencil/fh20?gclid=CjwKCAiAv9ucBhBXEiwA6N8nYORIT4UZLArlvLIKhIuOIcuDribFL7ZlnWlDsKeLN4qI4nk7SjsG5BoCduUQAvD_BwE&gclsrc=aw.ds#/shade/Saddle"
                >
                  <button type="submit" className="align-self-end read-more">
                    <Card.Footer type="submit" className="mx-auto">
                      Read
                    </Card.Footer>
                  </button>
                </form>
              </Card.Body>
            </Card>
          </Col>{" "}
        </Row>
      ) : (
        <></>
      )}

      <Row className="gy-4 ms-3 me-3">
        <Col>
          <div className="header-box">
            <h3> Style </h3>
            <p> Quintessential stylish products. </p>
            <p>
              {" "}
              <div onClick={() => setShowStyle(!showStyle)}>
                {" "}
                {showStyle ? (
                  <div className="show-less-button">Show less style </div>
                ) : (
                  <div className="show-more-button">See more style</div>
                )}{" "}
              </div>
            </p>
          </div>
        </Col>{" "}
        <Col>
          <Card
            className="h-100 shadow-sm bg-white rounded img-fluid"
            style={{ width: "16rem" }}
          >
            <Card.Img
              variant="top"
              src="https://cdn.shopify.com/s/files/1/0412/2394/6394/products/CARMINA_foto-2_1080x.png?v=1664880208"
            />
            <Card.Body>
              <Card.Title>Carmina</Card.Title>
              <Card.Text> by Pardo Hats</Card.Text>
              <br />
              <form
                target="_blank"
                action="https://pardohats.com/en/collections/novedades/products/carmina"
              >
                <button type="submit" className="align-self-end read-more">
                  <Card.Footer type="submit" className="mx-auto">
                    Read
                  </Card.Footer>
                </button>
              </form>
            </Card.Body>
          </Card>
        </Col>{" "}
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
              <Card.Title>Fringe Ear Cuff</Card.Title>
              <Card.Text> by Ragen Jewels</Card.Text>
              <br />

              <form
                target="_blank"
                action="https://ragenjewels.com/products/fringe-ear-cuff?variant=31939231678513"
              >
                <button type="submit" className="align-self-end read-more">
                  <Card.Footer type="submit" className="mx-auto">
                    Read
                  </Card.Footer>
                </button>
              </form>
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
              <Card.Title>Casablanca Drop Earrings</Card.Title>
              <Card.Text> by Isabel Marant </Card.Text>

              <form
                target="_blank"
                action="https://www.farfetch.com/shopping/women/isabel-marant-casablanca-drop-earrings-item-16932898.aspx"
              >
                <button type="submit" className="align-self-end read-more">
                  <Card.Footer type="submit" className="mx-auto">
                    Read
                  </Card.Footer>
                </button>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {showStyle ? (
        <Row>
          <Col></Col>{" "}
          <Col>
            <Card
              className="h-100 shadow-sm bg-white rounded img-fluid"
              style={{ width: "16rem" }}
            >
              <Card.Img
                variant="top"
                src="https://cdn.shopify.com/s/files/1/0135/6113/5168/products/new_20dress_201_2560x.jpg?v=1657574253"
              />
              <Card.Body>
                <Card.Title>Indian Charisma Midi Dress</Card.Title>
                <Card.Text> by Johanna Ortiz</Card.Text>

                <form
                  target="_blank"
                  action="https://www.kirnazabete.com/products/indian-charisma-midi-dress?variant=39705035866189&gclid=Cj0KCQiAyracBhDoARIsACGFcS4CXLUdZ3IA1g9pDFGvEObJ5u5JULXreyi8RRziV8WxlUHXvZMkznUaAqAmEALw_wcB"
                >
                  <button type="submit" className="align-self-end read-more">
                    <Card.Footer type="submit" className="mx-auto">
                      Read
                    </Card.Footer>
                  </button>
                </form>
              </Card.Body>
            </Card>
          </Col>
          {/*   <Col>
            <Card
              className="h-100 shadow-sm bg-white rounded img-fluid"
              style={{ width: "16rem" }}
            >
              <Card.Img variant="top" src={clip} />
              <Card.Body>
                <Card.Title>Grande Ariel Claw</Card.Title>
                <Card.Text> by Pico Copenhagen</Card.Text>
                <br />

                <form
                  target="_blank"
                  action="https://picocopenhagen.com/products/grande-ariel-claw?variant=40012886507568"
                >
                  <button type="submit" className="align-self-end read-more">
                    <Card.Footer type="submit" className="mx-auto">
                      Read
                    </Card.Footer>
                  </button>
                </form>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      ) : (
        <></>
      )}

      <Row className="gy-4 mb-5 ms-3 me-3">
        <Col>
          <div className="header-box">
            <h3> Appliances</h3>
            <p> Favorite, affordable appliances. </p>
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
              <form
                target="_blank"
                action="https://www.amazon.com/Masticating-Aeitto-Extractor-Function-Vegetables/dp/B094J44M5M/ref=sr_1_3?keywords=Best+Juicer+for+Celery&qid=1670873328&sr=8-3&ufe=app_do%3Aamzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc"
              >
                <button type="submit" className="align-self-end read-more">
                  <Card.Footer type="submit" className="mx-auto">
                    Read
                  </Card.Footer>
                </button>
              </form>
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

              <form
                target="_blank"
                action="https://www.amazon.com/Dreo-Air-Fryer-Functions-Reminder/dp/B08YNDYG71/ref=sr_1_2_sspa?crid=1PAQ3UALA4YTT&keywords=dreo+air+fryer&qid=1670873370&sprefix=dreo+air+fryer%2Caps%2C113&sr=8-2-spons&ufe=app_do%3Aamzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzVlRWWDY3U0UzMkZFJmVuY3J5cHRlZElkPUEwNjA3MDExMjJINko4WEhUNE9CTSZlbmNyeXB0ZWRBZElkPUEwMTIxMDE2MzhSODBKQzJER0w3QSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
              >
                <button type="submit" className="align-self-end read-more">
                  <Card.Footer type="submit" className="mx-auto">
                    Read
                  </Card.Footer>
                </button>
              </form>
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
              src="https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1642182216/filtered-17-gw-3/filtered-17-gw-3.jpg"
            />
            <Card.Body>
              <Card.Title> Larq Bottle Filtered </Card.Title>
              <Card.Text> by Larq </Card.Text>
              <br />

              <form
                target="_blank"
                action="https://www.livelarq.com/shop/larq-bottle-filtered"
              >
                <button type="submit" className="align-self-end read-more">
                  <Card.Footer type="submit" className="mx-auto">
                    Read
                  </Card.Footer>
                </button>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Wellness;
