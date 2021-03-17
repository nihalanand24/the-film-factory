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
      console.log(moviePairs);

      for (let movieKey in firebaseData) {
        moviePairs.push({
          searchedMovie: firebaseData[movieKey].searchedMovie,
          similarMovie: firebaseData[movieKey].similarMovie,
          key: movieKey
        });
      }

      console.log(moviePairs);

      setSavedMoviePairs(moviePairs.reverse());

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
                  ?<img src={NoPoster} alt="Poster not available"></img>
                  :<img src={similarMovie.poster} alt={`Poster for {similarMovie.title}`}></img>
                }

              </div>

              <div className="eachPairCaption">
                <p>If you like {searchedMovie.title} ({searchedMovie.year}), you might like the {similarMovie.language} movie {similarMovie.title} ({similarMovie.year}).
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
