import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Row from "./Row/index.jsx";
import request from "./request.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Row title="Netflix Origionals" fetchUrl={request.fetchNetflixOriginals} />
    <Row title="Netflix Documentaries" fetchUrl={request.fetchDocumentaries} />
  </React.StrictMode>
);
