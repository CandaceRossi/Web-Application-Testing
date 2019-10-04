import React from "react";

function Dashboard(props) {
  return (
    <div className="App">
      <display />
      <button
        className="strikes"
        onClick={() => props.strikeChange(props.strike)}
      >
        strike
      </button>

      <button className="ball" onClick={() => props.ballChange(props.ball)}>
        ball
      </button>
      <button className="foul" onClick={() => props.foulChange(props.foul)}>
        foul
      </button>
      <button className="hit" onClick={() => props.hitChange(props.hit)}>
        hit
      </button>
    </div>
  );
}

export default Dashboard;
