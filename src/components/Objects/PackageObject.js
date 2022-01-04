import { config, useSpring } from "@react-spring/three";
import { useEffect, useState } from "react";
import { BoxObject } from "./BoxObject";

export const PackageObject = () => {
  const initialX = -1;
  const finalX = 4;
  const [active, setActive] = useState(false);
  const [startTransport, setStartTransport] = useState(false);

  const { position } = useSpring({
    position: [!active ? initialX : finalX, 0, 0],
    config: config.wobbly
  });

  const startStopTransport = () => {
    setStartTransport(!startTransport);
  };

  useEffect(() => {
    if (startTransport) {
      let timeout;
      let start = true;
      const travel = () => {
        console.log("travel", start);
        start = !start;
        setActive(start);
        timeout = setTimeout(travel, 1.5 * 1000);
      };
      travel();
      return () => clearTimeout(timeout);
    }
  }, [startTransport]);

  return (
    <BoxObject
      onClick={startStopTransport}
      color={"#000000"}
      position={position}
      width={0.5}
      height={0.5}
      depth={0.5}
    />
  );
};
