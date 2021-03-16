// getMovieId

import axios from "axios";

import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieSearchResults = ({ setSearchedMovie, movieToSearch, setRecommendedArray }) => {
  const [movieArray, setMovieArray] = useState([]);

  useEffect(() => {
    movieToSearch &&
      axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/search/movie",
        dataResponse: "JSON",
        params: {
          api_key: "0f71218e40b140c550833011fa9c4afb",
          query: movieToSearch,
        },
      }).then((response) => {
        const movies = response.data.results;
        // console.log(movies);
        const englishMovies = movies.filter(
          (movie) => movie.original_language === "en" && !movie.genre_ids.includes(99)
        );
        console.log(englishMovies);
        setMovieArray(englishMovies.slice(0, 3));
        console.log("Searched for", movieToSearch);
      });
  }, [movieToSearch]);

  return (
    <div className="matchedMovies">
      <h2>Movies Search Results</h2>
      <div className="upperMovieCardContainer">
        {movieArray.length
          ? movieArray.map((movie) => {
            return (
              <MovieCard key={movie.id} movie={movie} setSearchedMovie={setSearchedMovie} setRecommendedArray={setRecommendedArray} />
            );
          })
          : ""
        }
      </div>
    </div>
  );
};

export default MovieSearchResults;
