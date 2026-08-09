import { useState, useEffect } from "react";
import type { StateConsts } from "../config/constants";
import "./State.css";

type StateProps = StateConsts & {};

function State({ name, framePaths, top, left, width }: StateProps) {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [currFrame, setCurrFrame] = useState<number>(0);

  // pre-loads all the images
  useEffect(() => {
    for (let i = 0; i < framePaths.length; i++) {
      const img = new Image();
      img.src = framePaths[i];
    }
  }, [framePaths]);

  // cycles the images when hovering over a state
  useEffect(() => {
    if (!isHovering) return;
    const timer = setInterval(() => {
      setCurrFrame((prev) => (prev + 1) % framePaths.length);
    }, 150);
    return () => clearInterval(timer);
  }, [isHovering, framePaths.length]);

  return (
    <img
      className="state-map"
      src={framePaths[currFrame]}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      alt={`rough outline of ${name}`}
      style={{ top, left, width }}
    />
  );
}

export default State;
