import { useEffect } from "react";
import { useState } from "react";
import axios from "../axios";
function Row(props) {
  const { title, fetchUrl } = props;

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
      {movies?.map((item) => {
        console.log(
          "`${baseURL}${item.backdrop_path}`",
          `${baseURL}${item.backdrop_path}`
        );
        return (
          <img
            src={`${baseURL}${item.backdrop_path}`}
            size="40px"
            alt={item.name}
          ></img>
        );
      })}
    </div>
  );
}
export default Row;
