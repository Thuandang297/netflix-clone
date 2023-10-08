import { useEffect } from "react";
import { useState } from "react";
import axios from "../axios";
import "./index.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
function Row(props) {
  const { title, fetchUrl, isLargerRow } = props;
  const [trailerURL, setTrailerURL] = useState("");
  const [movies, setMovies] = useState([]);
  const baseURL = "http://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function getData() {
      const req = await axios.get(fetchUrl);
      setMovies(req.data.results);
    }
    getData();
  }, []);
  const handleClickPicture = (movie) => {
    movieTrailer(movie?.name || movie?.title)
      ?.then((url) => {
        console.log(url);
        let idVideoTrailer =
          url && new URLSearchParams(new URL(url).search).get("v");
        setTrailerURL(idVideoTrailer);
      })
      ?.catch((error) => {
        console.log("error", error);
      });
  };

  const opts = {
    height: "450px",
    width: "100%",
    playerVar: {
      autoplay: 1,
    },
  };
  return (
    <div>
      <h2>{title}</h2>
      <div className="row_posters">
        {movies?.map((item) => {
          return (
            <img
              className={`row_poster ${isLargerRow ? "row_posterlarger" : ""}`}
              src={`${baseURL}${
                isLargerRow ? item.poster_path : item.backdrop_path
              }`}
              size="40px"
              alt={item.name}
              onClick={() => handleClickPicture(item)}
            ></img>
          );
        })}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
}
export default Row;
