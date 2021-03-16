import { useState, useEffect } from 'react';
import firebase from './firebase';
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
                <img src={searchedMovie.poster} alt={`Poster for ${searchedMovie.title}`}></img>
                <img src={similarMovie.poster} alt={`Poster for ${similarMovie.title}`}></img>
              </div>

              <div className="eachPairCaption">
                <p>If you like {searchedMovie.title}, you might like the {similarMovie.language} movie {similarMovie.title}.
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
