import { useState, useEffect } from 'react';
import './styles/App.scss'
import Header from './Components/Header';
import Footer from './Components/Footer';
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

  // Handles click events on Nav
  const handleNavClick = () => {


  }

  return (
    <>
      <Header />
      {/* <Main /> */}

      <SearchBar setSearch={setMovieToSearch} />
      <MovieSearchResults setMovieId={setMovieId} movieToSearch={movieToSearch} />
      <SimilarMovies id={movieId} />

      <Footer />
    </>
  );
}

export default App;
