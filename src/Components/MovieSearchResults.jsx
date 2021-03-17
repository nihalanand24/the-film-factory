// getMovieId

import axios from "axios";

import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieSearchResults = ({ setSearchedMovie, movieToSearch, setRecommendedArray, setShowSuggestedFilms }) => {
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
          (movie) => movie.original_language === "en"
          // && !movie.genre_ids.includes(99)
        );
        console.log(englishMovies);
        setMovieArray(englishMovies.slice(0, 5));
        console.log("Searched for", movieToSearch);
      });
  }, [movieToSearch]);

  return (
    // <div className="matchedMovies">
    //   <h2>Movies Search Results</h2>
    <>
      <h3 className="matchedMoviesH3">Click on a movie to see recommended films</h3>
      <div className="upperMovieCardContainer">
        {movieArray.length
          ? movieArray.map((movie) => {
            return (
              <MovieCard key={movie.id} 
              movie={movie} 
              setSearchedMovie={setSearchedMovie} 
              setRecommendedArray={setRecommendedArray} setShowSuggestedFilms={setShowSuggestedFilms} />
            );
          })
          : ""
        }
      </div>

    </>
  );
};

export default MovieSearchResults;
