import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import { Stage, TilingSprite } from "@inlet/react-pixi";
import headerimage from "../../../assets/images/header.png";

function Wellness3() {
  const pattern = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/p2.jpeg";

  class Tiling extends React.Component {
    count = 0;

    state = {
      tileScale: { x: 1, y: 1 },
      tilePosition: { x: 0, y: 0 },
    };

    componentDidMount() {
      this.props.app.ticker.add(this.tick);
    }

    componentWillUnmount() {
      this.props.app.ticker.remove(this.tick);
    }

    tick = (delta) => {
      this.count += 0.005 * delta;

      this.setState((state) => ({
        tileScale: {
          x: 2 + Math.sin(this.count),
          y: 2 + Math.cos(this.count),
        },
        tilePosition: {
          x: state.tilePosition.x + 1,
          y: state.tilePosition.y + 1,
        },
      }));
    };

    render() {
      return (
        <TilingSprite
          image={pattern}
          width={500}
          height={500}
          tilePosition={this.state.tilePosition}
          tileScale={this.state.tileScale}
        />
      );
    }
  }
}

export default Wellness3;
