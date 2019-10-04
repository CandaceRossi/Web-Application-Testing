import React from "react";

function Dashboard(props) {
  return (
    <div className="App">
      <h3>Player At Bat: </h3>
      <div>balls: {props.ball}</div>
      <div>strikes: {props.strike}</div>
    </div>
  );
}

export default Dashboard;
