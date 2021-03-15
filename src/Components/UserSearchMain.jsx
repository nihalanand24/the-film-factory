import { useState, useEffect } from 'react';
import '../styles/App.scss'
import MovieSearchResults from './MovieSearchResults';
import SearchBar from './SearchBar';
import SimilarMovies from './SimilarMovies';

function UserSearchMain({ movieToSearch }) {

  const [movieId, setMovieId] = useState(null);
  // const [movieToSearch, setMovieToSearch] = useState("");

  useEffect(() => {
    movieId &&
      console.log(movieId);
  }, [movieId])

  // Handles click events on Nav
  const handleNavClick = () => {


  }

  return (
    <>


      {/* <SearchBar setSearch={setMovieToSearch} /> */}
      <MovieSearchResults setMovieId={setMovieId} movieToSearch={movieToSearch} />
      <SimilarMovies id={movieId} />


    </>
  );
}

export default UserSearchMain;
