const API_KEY = "92ee5fab20011e9db3035aa002476ef4";
const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTopActionMovies: `/movie/top_rated?api_key=${API_KEY}&with_genres=28`,
  fetchTopComendyMovies: `/movie/top_rated?api_key=${API_KEY}&with_genres=35`,
  fetchTopHorrnorMovies: `/movie/top_rated?api_key=${API_KEY}&with_genres=27`,
  fetchTopRomanceMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-10749`,
  fetchDocumentaries: `/movie/top_rated?api_key=${API_KEY}&with_genres=90`,
};
export default request;
