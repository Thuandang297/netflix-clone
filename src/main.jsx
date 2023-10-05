import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Row from "./Row/index.jsx";
import request from "./request.js";
import Banner from "./Banner/index.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="app">
    {/* <React.StrictMode> */}
    {/* <NavBar/> */}
    {/* Banner */}
    <Banner />

    <Row
      key={1}
      isLargerRow={true}
      title="Netflix Origionals"
      fetchUrl={request.fetchNetflixOriginals}
    />
    {/* <Row
        key={2}
        title="Top Action Movies"
        fetchUrl={request.fetchTopActionMovies}
      />
      <Row
        key={3}
        title="Top Horrnor Movies"
        fetchUrl={request.fetchTopHorrnorMovies}
      />
      <Row key={4} title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row
        key={5}
        title="Top Romance"
        fetchUrl={request.fetchTopRomanceMovies}
      />
      <Row
        key={6}
        title="Top Comendy"
        fetchUrl={request.fetchTopComendyMovies}
      /> */}
    {/* </React.StrictMode> */}
  </div>
);
