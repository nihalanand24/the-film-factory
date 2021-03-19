// MovieSearchResults.jsx

import MovieCard from "./MovieCard";

const MovieSearchResults = ({ setSearchedMovie, setRecommendedArray, setShowSuggestedFilms, movieArray }) => {

  return (
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
          : null
        }
      </div>
    </>
  );
};

export default MovieSearchResults;
