import { useState } from 'react';
import '../styles/App.scss'
import MovieSearchResults from './MovieSearchResults';
import SimilarMovies from './SimilarMovies';

function UserSearchMain({ movieToSearch }) {

  const [searchedMovie, setSearchedMovie] = useState({});
  // const [movieToSearch, setMovieToSearch] = useState("");
  const [recommendedArray, setRecommendedArray] = useState([]);

  return (
    <>


      {/* <SearchBar setSearch={setMovieToSearch} /> */}
      <MovieSearchResults setSearchedMovie={setSearchedMovie} movieToSearch={movieToSearch} setRecommendedArray={setRecommendedArray} />
      <SimilarMovies searchedMovie={searchedMovie} id={searchedMovie.id} setRecommendedArray={setRecommendedArray} recommendedArray={recommendedArray} />


    </>
  );
}

export default UserSearchMain;
