// SearchBar
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
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
        <withRouter>
            <form onSubmit={handleSubmit}>
                <label htmlFor="searchMovie" className="sr-only">search for a movie</label>
                <input onChange={(e) => setMovieName(e.target.value)} type="text" id="searchMovie" value={movieName} placeholder="search for a movie" />

                <button type="submit">Search</button>
            </form>
        </withRouter>
    )
}

export default withRouter(SearchBar);