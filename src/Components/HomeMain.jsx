// HomeMain.jsx
// This is the main section of the page when the header logo is clicked
// Also loads on page refresh
import SearchBar from './SearchBar';


const HomeMain = () => {




    return (

        <main>
            <div className="wrapper welcomeContainer">
                <h1>Welcome to the film factory.</h1>
                {/* <SearchBar /> */}
                <h2>recently matched movies:</h2>
            </div>
        </main>

    )

}

export default HomeMain;