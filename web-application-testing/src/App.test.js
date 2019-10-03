import React from "react";
import { render } from "@testing-library";
// import ReactDOM from "react-dom";
import App from "./App";
import Display from "./components/Display";

test("renders without crashing", () => {
  render(<App />);
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

test("Scoreboard header is found", () => {
  const { getByText } = render(<Display />);
  getByText("Player At Bat:");
});
