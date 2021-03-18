// App.jsx
import './styles/App.scss'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React, { useState } from 'react';
import HomeMain from './Components/HomeMain';
// import Main from './Components/UserSearchMain';
import UserSearchMain from './Components/UserSearchMain';
import PubResultsMain from './Components/PubResultsMain';
import Header from './Components/Header';
import Footer from './Components/Footer';


const App = () => {
    // const [movieToSearch, setMovieToSearch] = useState("");
    const [movieArray, setMovieArray] = useState([]);
    const [searchedMovieTitle, setSearchedMovieTitle] = useState('');

    return (
        <Router>
            <>
                <Header />
                <Switch>
                    {/* Route Paths */}
                    {/* Default page on load = /index */}
                    <Route exact path="/" render={() => {
                        return (
                            <Redirect to="/index" />
                        )
                    }} />
                    <Route path="/index">
                        <HomeMain setMovieArray={setMovieArray}
                            setSearchedMovieTitle={setSearchedMovieTitle} searchedMovieTitle={searchedMovieTitle}
                        />
                    </Route>
                    <Route path="/movieSearch">
                        <UserSearchMain movieArray={movieArray}
                            searchedMovieTitle={searchedMovieTitle}
                        />
                    </Route>
                    <Route path="/allTimeResults">
                        <PubResultsMain />
                    </Route>
                </Switch>
                <Footer />
            </>
        </Router>
    )
}

export default App;