// SimilarMovies
import { Link } from 'react-router-dom';
import firebase from './firebase.js';
import { useState, useEffect } from 'react';
import getSimilarMovies from './getSimilarMovies';
import MovieCard from './MovieCard';

const SimilarMovies = ({ searchedMovie, id, recommendedArray, setRecommendedArray }) => {
  const [movieSuggestions, setMovieSuggestions] = useState([]);
  // const [recommendedArray, setRecommendedArray] = useState([]);

  useEffect(() => {
    if (id) {
      setMovieSuggestions([]);
      getSimilarMovies(id, setMovieSuggestions);
    }
  }, [id]);

  const addToRecommendedArray = (movie) => {

    let repeatedMovie = false;
    recommendedArray.forEach((selectedMovie) => {
      if (selectedMovie.id === movie.id) {
        repeatedMovie = true;
      }
    });

    if (!repeatedMovie) {
      setRecommendedArray([...recommendedArray, {
        title: movie.title,
        year: movie.year,
        language: movie.language,
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        id: movie.id
      }]);
    }


  };

  const pushPairToFirebase = () => {

    const usersMovie = {
      title: searchedMovie.title,
      poster: `https://image.tmdb.org/t/p/w500${searchedMovie.poster_path}`,
      id: searchedMovie.id,
      year: searchedMovie.release_date.slice(0, 4)
    }

    console.log(usersMovie, recommendedArray);

    const dbRef = firebase.database().ref();

    recommendedArray.forEach(movie => {

      dbRef.push({
        searchedMovie: usersMovie,
        similarMovie: movie
      })

    })

  }

  return (
    <>
      <p>Movies Suggestions</p>

      {movieSuggestions.length
        ? movieSuggestions.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              setSearchedMovie={() => addToRecommendedArray(movie)}
              setRecommendedArray={setRecommendedArray}>
              <p>{movie.language}</p>
            </MovieCard>
          );
        })
        : ''}
      <Link to="/allTimeResults">
        <button onClick={pushPairToFirebase}>Save</button>
      </Link>

    </>
  );
};

export default SimilarMovies;
