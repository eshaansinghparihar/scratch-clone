import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const ResizeComponent = ({ character, componentId }) => {
  const [state, setState] = useState({
    scale: 1,
  });

  const changeSize = () => {
    const element = document.getElementById(character.active);
    element.style.transform = `scale(${state.scale})`;
  };

  return (
    <Paper elevation={3}>
      <div className="text-center rounded bg-purple-500 p-2 my-3">
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Size:</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={state.scale}
            onChange={(e) =>
              setState({ ...state, scale: parseInt(e.target.value) })
            }
          />
        </div>
        <div
          id={componentId}
          className="text-center bg-yellow-400 text-black px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={() => changeSize()}
        >
          Size {state.scale}
        </div>
      </div>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(ResizeComponent);
