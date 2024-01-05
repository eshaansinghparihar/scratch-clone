import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const SpeakMessageWithTimer = ({ character, componentId }) => {
  const [state, setState] = useState({
    showMsg: false,
    timerMessage: "",
    timerForMessage: 0,
  });

  const displayMessage = () => {
    const messageBox = document.getElementById(`${character.active}-message-box`);
    const messageBox1 = document.getElementById(`${character.active}-message-box1`);
    messageBox1.style.display = "none";

    if (state.showMsg) {
      setState({ ...state, showMsg: false });
      messageBox.style.display = "none";
      return;
    }

    setState({ ...state, showMsg: true });
    messageBox.style.display = "block";
    messageBox.style.position = "relative";

    messageBox.innerHTML = state.timerMessage;

    window.setTimeout(() => {
      setState({ ...state, showMsg: false });
      messageBox.style.display = "none";
    }, state.timerForMessage * 1000);
  };

  return (
    <Paper elevation={3}>
      <div className="rounded text-center bg-purple-500 p-2 my-3">
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Message</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="text"
            value={state.timerMessage}
            onChange={(e) => {
              e.target.value.length > 0 &&
                setState({ ...state, timerMessage: e.target.value });
            }}
          />
        </div>
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Timer:</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={state.timerForMessage}
            onChange={(e) => {
              parseInt(e.target.value) > 0 &&
                setState({ ...state, timerForMessage: parseInt(e.target.value) });
            }}
          />
        </div>
        <div
          id={componentId}
          className="flex flex-row flex-wrap text-center bg-yellow-400 text-black px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={() => displayMessage()}
        >
          {`Speak ${state.timerMessage}`}
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

export default connect(mapStateToProps)(SpeakMessageWithTimer);
