import { useState, useEffect } from 'react';
import './styles/App.scss'
import MovieSearchResults from './Components/MovieSearchResults';
import SearchBar from './Components/SearchBar';
import SimilarMovies from './Components/SimilarMovies';

function App() {

  const [movieId, setMovieId] = useState(null);
  const [movieToSearch, setMovieToSearch] = useState("");

  useEffect(() => {
    movieId &&
      console.log(movieId);
  }, [movieId])


  return (
    <>
      <SearchBar setSearch={setMovieToSearch} />
      <MovieSearchResults setMovieId={setMovieId} movieToSearch={movieToSearch} />
      <SimilarMovies id={movieId} />
    </>
  );
}

export default App;
