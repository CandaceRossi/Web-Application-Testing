import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

function App(props) {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [foul] = useState(0);
  const [hit] = useState(0);
  const strikeChange = props => {
    if (strike < 3) {
      setStrike(strike + 1);
    } else {
      setStrike(0);
    }
  };
  const ballChange = props => {
    if (ball < 4) {
      setBall(ball + 1);
    } else {
      setBall(0);
    }
  };
  const hitChange = props => {
    if (hit < 1) {
      setStrike(0) && setBall(0);
    }
  };
  const foulChange = props => {
    if (foul < 2 || strike < 2) {
      setStrike(strike + 1);
    } else {
      setStrike(0);
    }
  };
  return (
    <div className="App">
      <Display ball={ball} strike={strike} />
      <Dashboard
        ball={ball}
        strike={strike}
        strikeChange={strikeChange}
        ballChange={ballChange}
        foulChange={foulChange}
        hitChange={hitChange}
      />
    </div>
  );
}

export default App;
