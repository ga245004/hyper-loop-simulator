import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { Simulator } from "./components/Simulator";
import "./styles.css";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Simulator />
  </StrictMode>,
  rootElement
);
