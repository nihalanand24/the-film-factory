import axios from 'axios';
import { useState,useEffect } from 'react';
import './styles/App.scss'
import MovieSearchResults from './Components/MovieSearchResults';
import SearchBar from './Components/SearchBar';

function App () {

  const [ movieId, setMovieId ] = useState(null);


  // const baseUrl = 'https://api.themoviedb.org/3';
  // const apiKey = `0f71218e40b140c550833011fa9c4afb`;
  // const searchMovie = '/search/movie';

  // useEffect(() => {
  //   axios({
  //     method: 'GET',
  //     url: 'https://api.themoviedb.org/3/search/movie',
  //     dataResponse: 'JSON',
  //     params: {
  //       api_key: '0f71218e40b140c550833011fa9c4afb',
  //       query: 'Interstellar'
  //     }
  //   }).then(res => getMovies(res.data.results[0].id))
  // }, [])

  // const getMovies = (id) => {
  //   axios({
  //     method: 'GET',
  //     url: `https://api.themoviedb.org/3/movie/${id}/similar`,
  //     dataResponse: 'JSON',
  //     params: {
  //       api_key: '0f71218e40b140c550833011fa9c4afb',
  //       page: 1
  //     }
  //   }).then(res => res.data.results).then(arr => arr.filter(movie => movie.original_language !== 'en')).then(foreignFilmArr => foreignFilmArr.forEach(film => console.log(film.title, film.id, film.original_language)))
  // }
  useEffect( () => {
    movieId &&
    console.log(movieId);
  },[movieId])


  return (
    <>
      <SearchBar />
      <MovieSearchResults setMovieId = {setMovieId}/>
    </>
  );
}

export default App;
