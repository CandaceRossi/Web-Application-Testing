import React from "react";

function Dashboard(props) {
  return (
    <div className="App">
      <h3>Player At Bat: </h3>
      <div>balls: {props.balls}</div>
      <div>strikes: {props.strikes}</div>
    </div>
  );
}

export default Dashboard;
