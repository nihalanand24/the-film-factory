import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

function App () {


  // const baseUrl = 'https://api.themoviedb.org/3';
  // const apiKey = `0f71218e40b140c550833011fa9c4afb`;
  // const searchMovie = '/search/movie';

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      dataResponse: 'JSON',
      params: {
        api_key: '0f71218e40b140c550833011fa9c4afb',
        query: 'Interstellar'
      }
    }).then(res => getMovies(res.data.results[0].id))
  }, [])

  const getMovies = (id) => {
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${id}/similar`,
      dataResponse: 'JSON',
      params: {
        api_key: '0f71218e40b140c550833011fa9c4afb',
        page: 1
      }
    }).then(res => res.data.results).then(arr => arr.filter(movie => movie.original_language !== 'en')).then(foreignFilmArr => foreignFilmArr.forEach(film => console.log(film.title, film.id, film.original_language)))
  }


  return (
    <div className="App">
      <p>TESTING APP</p>
      <button type='submit'>CLICK ME</button>
    </div>
  );
}

export default App;
