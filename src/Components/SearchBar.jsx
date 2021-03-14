// SearchBar
import { useState } from 'react';
// import { randFunction } from './MovieSearchResults';


const SearchBar = ({ setSearch }) => {

    const [movieName, setMovieName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event);
        setSearch(movieName);
        console.log(movieName);
        // randFunction();

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchMovie">Enter Movie Name</label>
            <input onChange={(e) => setMovieName(e.target.value)} type="text" id="searchMovie" value={movieName} placeholder="Enter Movie Name" />

            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;