import React from "react";

function Dashboard(props) {
  //   const [dashboard, setDashboard] = useState({
  //     balls: 0,
  //     strikes: 0,
  //     foul: 0,
  //     hit: 0
  //   });
  return (
    <div className="App">
      <button className="strikes" onClick={() => {}}>
        strike
      </button>

      <button className="ball" onClick={() => {}}>
        ball
      </button>
      <button className="foul" onClick={() => {}}>
        foul
      </button>
      <button className="hit" onClick={() => {}}>
        hit
      </button>
    </div>
  );
}

export default Dashboard;
