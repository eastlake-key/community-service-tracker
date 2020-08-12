import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.out.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// Strict mode is unfortuanately not used due to a reliance on the react-helmet which has not yet
// made their code strict-safe.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
