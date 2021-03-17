// SearchBar
import axios from 'axios';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
// import { randFunction } from './MovieSearchResults';


const SearchBar = ({ setResultsFound, setMovieArray, history, setSearchedMovieTitle }) => {

    const [movieName, setMovieName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        movieName &&
      axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/search/movie",
        dataResponse: "JSON",
        params: {
          api_key: "0f71218e40b140c550833011fa9c4afb",
          query: movieName,
        },
      }).then((response) => {
        const movies = response.data.results;
        // console.log(movies);
        const englishMovies = movies.filter(
          (movie) => movie.original_language === "en"
          // && !movie.genre_ids.includes(99)
        );
        
        setSearchedMovieTitle(movieName);

        if (!englishMovies.length) {
          setResultsFound(false);
          setMovieArray([]);
        } else {
            history.push("/movieSearch");
            setMovieArray(englishMovies.slice(0, 5));
        }
      }).catch(() => {
        alert('No data response received. Please try again later.')
      });
        
        
        
        
        // history.push("/movieSearch");

        // setSearch(movieName);
        console.log(movieName);
        // randFunction();

    }

    return (
        <form className="movieSearchForm" onSubmit={handleSubmit}>
            <div className="movieSearchBox">
                <label htmlFor="searchMovie" className="sr-only">search for a movie</label>
                <input required onChange={(e) => setMovieName(e.target.value)} type="text" id="searchMovie" value={movieName} placeholder="search for a movie" />

                <button type="submit">Search</button>
            </div>
        </form>
    )
}

export default withRouter(SearchBar);