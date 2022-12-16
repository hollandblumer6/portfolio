import { React, useCallback } from "react";
import { Stage, Sprite, Graphics } from "@inlet/react-pixi";
import Temp from "../../../assets/images/temp-headshot.png";

function Test() {
  const draw = useCallback((g) => {
    g.beginFill(0x0033cc, 1);
    g.lineStyle(4, 0xff0000, 1);
    g.drawRect(250, 150, 150, 120);
    g.endFill();
  }, []);

  return (
    <Stage
      width={300}
      height={300}
      options={{
        backgroundColor: 0x012b30,
        antialias: true,
      }}
    >
      <Sprite image={Temp} />
      <Graphics draw={draw} />
    </Stage>
  );
}

export default Test;
