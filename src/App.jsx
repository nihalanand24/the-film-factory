// App.jsx
import './styles/App.scss'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomeMain from './Components/HomeMain';
// import Main from './Components/UserSearchMain';
import UserSearchMain from './Components/UserSearchMain';
import PubResultsMain from './Components/PubResultsMain';
import Header from './Components/Header';
import Footer from './Components/Footer';


const App = () => {

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
                    <Route path="/index" component={HomeMain} />
                    <Route path="/movieSearch" component={UserSearchMain} />
                    <Route path="/allTimeResults" component={PubResultsMain} />
                </Switch>
                <Footer />
            </>
        </Router>
    )
}

export default App;