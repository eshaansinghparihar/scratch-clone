import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const HiddenComponent = ({ character, componentId }) => {
  
  const hideComponent = () => {
    const element = document.getElementById(character.active);
    element.style.display = "none";
  };

  return (
    <Paper elevation={3}>
      <div
        id={componentId}
        className="text-center rounded bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer mx-auto"
        onClick={() => hideComponent()}
      >
        Hide
      </div>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(HiddenComponent);
