import React from "react";
import MoveX from "./motion/MoveX";
import TurnAntiClockwise from "./motion/TurnAntiClockwise";
import TurnClockwise from "./motion/TurnClockwise";
import MoveToPosition from "./motion/MoveToPosition";
import SpeakMessage from "./looks/SpeakMessage";
import SpeakMessageWithTimer from "./looks/SpeakMessageWithTimer";
import ResizeComponent from "./looks/ResizeComponent";
import DisplayComponent from "./looks/DisplayComponent";
import HiddenComponent from "./looks/HiddenComponent";
import HideMessageComponent from "./looks/HideMessageComponent";
import MoveY from "./motion/MoveY";
import ThinkComponent from "./looks/ThinkComponent";
import ThinkWithTimer from "./looks/ThinkWithTimer";

// fetch components based on different keys
export const getComponent = (key, id) => {
  switch (key) {
    case "MOVE_Y":
      return <MoveY componentId={id} />;
    case "MOVE":
      return <MoveX componentId={id} />;

    case "TURN_CLOCKWISE":
      return <TurnClockwise componentId={id} />;

    case "TURN_ANTI_CLOCKWISE":
      return <TurnAntiClockwise componentId={id} />;

    case "GOTO_XY":
      return <MoveToPosition componentId={id} />;

    case "SAY_MESSAGE":
      return <SpeakMessage componentId={id} />;

    case "SAY_MESSAGE_WITH_TIMER":
      return <SpeakMessageWithTimer componentId={id} />;

    case "SIZE":
      return <ResizeComponent componentId={id} />;

    case "SHOW":
      return <DisplayComponent componentId={id} />;

    case "HIDE":
      return <HiddenComponent componentId={id} />;

    case "HIDE_MESSAGE":
      return <HideMessageComponent componentId={id} />;

    case "THINK":
      return <ThinkComponent componentId={id} />;

    case "THINK_TIMER":
      return <ThinkWithTimer componentId={id} />;

    default:
      return React.null;
  }
};
