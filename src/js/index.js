//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";
import "./views/neworder";

//import your own components
import Layout from "./layout";
import { NewOrder } from "./views/neworder";

//render your react application
ReactDOM.render(<NewOrder />, document.querySelector("#app"));
