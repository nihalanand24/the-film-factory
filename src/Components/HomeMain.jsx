// HomeMain.jsx
// This is the main section of the page when the header logo is clicked
// Also loads on page refresh
import { useState } from 'react';
import SearchBar from './SearchBar';


const HomeMain = ({ setMovieArray, setSearchedMovieTitle, searchedMovieTitle }) => {
    const [resultsFound, setResultsFound] = useState(true);


    return (

        <main>
            <div className="wrapper welcomeContainer centralContainer">
                <h2>Welcome to the film factory.</h2>
                {/* <h2>search for a movie:</h2> */}
                <SearchBar setResultsFound={setResultsFound} setMovieArray={setMovieArray} setSearchedMovieTitle={setSearchedMovieTitle} />

                {resultsFound ?
                    <h3>Enter an English film to see foreign language film recommendations.</h3>
                    : <h3 className='noResults'>No Results Found For "{searchedMovieTitle}". <div>Please check the spelling and try again.</div></h3>
                }

            </div>
        </main>

    )

}

export default HomeMain;