// SavedMoviePairs.jsx

import { useState, useEffect } from 'react';
import firebase from './firebase';
import NoPoster from "../assets/NoPoster.png";

// refrencing database
const SavedMoviePairs = () => {
  const [savedMoviePairs, setSavedMoviePairs] = useState([]);

  useEffect(() => {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (data) => {
      const firebaseData = data.val();
      const moviePairs = [];

      for (let movieKey in firebaseData) {
        moviePairs.push({
          searchedMovie: firebaseData[movieKey].searchedMovie,
          similarMovie: firebaseData[movieKey].similarMovie,
          key: movieKey
        });
      }

      setSavedMoviePairs(moviePairs.reverse().slice(0, 20));

    });
  }, []);

  return (
    <>
      {
        savedMoviePairs.map((movie) => {
          const { searchedMovie, similarMovie } = movie;
          return (
            <div className="eachPairBox" key={movie.key}>

              <div className="eachPairPosters">
                {
                  searchedMovie.poster === "https://image.tmdb.org/t/p/w500null"
                    ? <img src={NoPoster} alt="Poster not available"></img>
                    : <img src={searchedMovie.poster} alt={`Poster for
                  {searchedMovie.title}`}></img>
                }

                {
                  similarMovie.poster === "https://image.tmdb.org/t/p/w500null"
                    ? <img src={NoPoster} alt="Poster not available"></img>
                    : <img src={similarMovie.poster} alt={`Poster for {similarMovie.title}`}></img>
                }
              </div>

              <div className="eachPairCaption">
                <p>If you like <strong>{searchedMovie.title} ({searchedMovie.year})</strong> , you might like the {similarMovie.language} movie <strong>{similarMovie.title} ({similarMovie.year})</strong>.
                </p>
              </div>
            </div>
          )
        })
      }
    </>
  )
};

export default SavedMoviePairs;
