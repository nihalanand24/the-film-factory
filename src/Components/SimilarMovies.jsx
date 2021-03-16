// SimilarMovies
import { Link } from 'react-router-dom';
import firebase from './firebase.js';
import { useState, useEffect } from 'react';
import getSimilarMovies from './getSimilarMovies';
import MovieCard from './MovieCard';

const SimilarMovies = ({ searchedMovie, id, recommendedArray, setRecommendedArray }) => {
  const [movieSuggestions, setMovieSuggestions] = useState([]);
  const [selected, setSelected] = useState(false)
  // const [recommendedArray, setRecommendedArray] = useState([]);

  useEffect(() => {
    if (id) {
      setMovieSuggestions([]);
      getSimilarMovies(id, setMovieSuggestions);
    }
  }, [id]);

  const addToRecommendedArray = (event, movie) => {

    console.log(event);

    let repeatedMovie = false;
    recommendedArray.forEach((selectedMovie) => {
      if (selectedMovie.id === movie.id) {
        repeatedMovie = true;
        const cursor = recommendedArray.indexOf(selectedMovie);
        const tempArray = [...recommendedArray];
        tempArray.splice(cursor, 1);
        setRecommendedArray(tempArray);
        setSelected(false);
      }
    });
    
    if (!repeatedMovie) {
      
      if (recommendedArray.length === 3) {
        alert('You have selected the maximum of 3 movies.');
        const tempArray = [...recommendedArray].slice(0,3);
        setRecommendedArray(tempArray);
      } else {
        setSelected(true);
        setRecommendedArray([...recommendedArray, {
          title: movie.title,
          year: movie.year,
          language: movie.language,
          poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          id: movie.id
        }]);
      }

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
              selected={selected}
              key={movie.id}
              movie={movie}
              setSearchedMovie={(e) => addToRecommendedArray(e, movie)}
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
