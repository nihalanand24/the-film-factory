// getMovieId

import MovieCard from "./MovieCard";

const MovieSearchResults = ({ setSearchedMovie, movieToSearch, setRecommendedArray, setShowSuggestedFilms, movieArray }) => {


  return (
    // <div className="matchedMovies">
    //   <h2>Movies Search Results</h2>
    <>
      <h3 className="matchedMoviesH3">Click on a movie to see recommended films</h3>
      <div className="upperMovieCardContainer">
        {movieArray.length
          ? movieArray.map((movie) => {
            return (
              <MovieCard key={movie.id} movie={movie} setSearchedMovie={setSearchedMovie} setRecommendedArray={setRecommendedArray} setShowSuggestedFilms={setShowSuggestedFilms} />
            );
          })
          : ""
        }
      </div>

    </>
  );
};

export default MovieSearchResults;
