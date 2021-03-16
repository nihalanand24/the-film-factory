// SearchBar
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
// import { randFunction } from './MovieSearchResults';


const SearchBar = ({ setSearch, history }) => {

    const [movieName, setMovieName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event);

        history.push("/movieSearch");

        setSearch(movieName);
        console.log(movieName);
        // randFunction();

    }

    return (
        <form className="movieSearchForm" onSubmit={handleSubmit}>
            <div className="movieSearchBox">
                <label htmlFor="searchMovie" className="sr-only">search for a movie</label>
                <input required="true" onChange={(e) => setMovieName(e.target.value)} type="text" id="searchMovie" value={movieName} placeholder="search for a movie" />

                <button type="submit">Search</button>
            </div>
        </form>
    )
}

export default withRouter(SearchBar);