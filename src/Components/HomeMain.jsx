// HomeMain.jsx
// This is the main section of the page when the header logo is clicked
// Also loads on page refresh
import SearchBar from './SearchBar';


const HomeMain = ({ setMovieToSearch }) => {

    return (

        <main>
            <div className="wrapper welcomeContainer">
                <h1>Welcome to the film factory.</h1>
                {/* <h2>search for a movie:</h2> */}
                <SearchBar setSearch={setMovieToSearch} />
            </div>
        </main>

    )

}

export default HomeMain;