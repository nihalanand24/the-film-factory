// HomeMain.jsx
// This is the main section of the page when the header logo is clicked
// Also loads on page refresh
import SearchBar from './SearchBar';


const HomeMain = ({ setMovieToSearch }) => {

    return (

        <main>
            <div className="wrapper welcomeContainer centralContainer">
                <h2>Welcome to the film factory.</h2>
                {/* <h2>search for a movie:</h2> */}
                <SearchBar setSearch={setMovieToSearch} />
                <h3>Enter an English movie to get recommendations for foreign language films.</h3>
            </div>
        </main>

    )

}

export default HomeMain;