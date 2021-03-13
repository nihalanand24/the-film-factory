// SearchBar
import { useState } from 'react';

const SearchBar = () => {

    const [movieName, setMovieName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchMovie">Enter Movie Name</label>
            <input onChange={(e) => setMovieName(e.target.value)} type="text" id="searchMovie" placeholder="Enter Movie Name" />

            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar; 