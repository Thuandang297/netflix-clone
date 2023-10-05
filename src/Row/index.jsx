import { useEffect } from "react";
import { useState } from "react";
import axios from "../axios";
import "./index.css";
function Row(props) {
  const { title, fetchUrl, isLargerRow } = props;

  const [movies, setMovies] = useState([]);
  const baseURL = "http://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function getData() {
      const req = await axios.get(fetchUrl);
      setMovies(req.data.results);
    }
    getData();
  }, []);
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
            ></img>
          );
        })}
      </div>
    </div>
  );
}
export default Row;
