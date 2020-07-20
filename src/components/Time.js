import React from "react";
const moment = require('moment');

const Time = (props) => {
  return (
    <div>
      <div className="time">The time is: {props.time}</div>
    </div>
  );
};

Time.defaultProps = {
    time: moment().format('MMMM Do YYYY, h:mm:ss a')
}

export default Time;
