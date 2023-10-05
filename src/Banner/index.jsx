import React, { useEffect, useState } from "react";
import request from "../request.js";
import axios from "../axios";
import { baseURL } from "../config.jsx";
import "./index.css";
function Banner(props) {
  const baseURL = "http://image.tmdb.org/t/p/original/";
  const [movie, setMovie] = useState();
  console.log("movie", movie);
  useEffect(() => {
    async function getData() {
      const req = await axios.get(request.fetchTopRated);
      let bannerItem =
        req.data.results[Math.floor(Math.random() * req.data.results.length)];
      console.log("bannerItem", bannerItem);
      setMovie(bannerItem);
    }
    getData();
  }, []);
  const truncate = (str, n) => {
    console.log("str", str);
    console.log("n", n);
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${baseURL}${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* background */}
        {/* <image src={images}></image> */}
        {/* title */}
        <h2 className="banner_titles">
          {" "}
          {movie?.title || movie?.original_title || movie?.original_title}
        </h2>
        {/* button */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        {/* description */}
        <div className="banner_descriptions">
          <h2>{truncate(movie?.overview, 300)}</h2>
        </div>
      </div>
      <div className="faded_banner"></div>
    </header>
  );
}
export default Banner;
