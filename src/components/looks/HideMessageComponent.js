import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const HideMessageComponent = ({ character, componentId }) => {

  const hideMessage = () => {
    window.clearTimeout();
    const messageBox = document.getElementById(`${character.active}-message-box`);
    const messageBox1 = document.getElementById(`${character.active}-message-box1`);
    messageBox.style.display = "none";
    messageBox1.style.display = "none";
  };

  return (
    <Paper elevation={3}>
      <div
        id={componentId}
        onClick={() => hideMessage()}
        className="rounded bg-purple-700 text-center text-white max-w-content p-1 my-3"
      >
        Hide Message
      </div>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(HideMessageComponent);
