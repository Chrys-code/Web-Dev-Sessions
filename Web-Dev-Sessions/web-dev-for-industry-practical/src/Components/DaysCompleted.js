import React from "react";
import PropTypes from "prop-types";

function DaysCompleted(props) {
  const { days } = props;
  const h1Style = {
    fontFamily: "Quicksand",
    fontStyle: "normal",
    fontWeight: "normal",
    fontWize: "30px",
    lineHeight: "37px",
    color: "#BC9CFF",
  }
  return (
    <div>
      <h1 style={h1Style}> {days} Days Completed</h1>
    </div>
  );
}

DaysCompleted.propTypes = {
    days: PropTypes.number,
  };
  
  DaysCompleted.defaultProps = {
    days: 0,
  };
export default DaysCompleted;