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

      for (let movieKey in firebaseData.movies) {
        moviePairs.push({
          key: movieKey,
          title: firebaseData.movies[movieKey].title,
          poster: firebaseData.movies[movieKey].poster
        });
      }

      // console.log(firebaseData);
      setSavedMoviePairs(moviePairs);
    });
  }, []);
  return (
  <>

    {
        savedMoviePairs.map(movie => {
            return (
            <div className='movieCard' key={movie.key}>
                <p>{movie.title}</p>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster}`} alt={`Poster for ${movie.title}`}/>
            </div>
            )
        })
    }

  </>
  )
};
export default SavedMoviePairs;
