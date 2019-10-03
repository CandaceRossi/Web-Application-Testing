import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

function App() {
  const [display, setDisplay] = useState(0);
  const [dashboard, setDashboard] = useState(0);

  return (
    <div className="App">
      <Display balls={display.balls} strikes={display.strikes} />
      <Dashboard balls={dashboard.balls} strikes={dashboard.strikes} />
    </div>
  );
}

export default App;
