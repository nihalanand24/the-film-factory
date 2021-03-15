// App.jsx
import './styles/App.scss'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomeMain from './Components/HomeMain';
// import Main from './Components/UserSearchMain';
import UserSearchMain from './Components/UserSearchMain';
import PubResultsMain from './Components/PubResultsMain';
import Header from './Components/Header';
import Footer from './Components/Footer';


const App = () => {

    const { selectHome, setSelectHome } = useState(false)

    return (
        <Router>
            <>
                <Header />
                <ul>
                    <li>
                        <Link to="/index">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/movieSearch">current results</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/allTimeResults">all-time results</Link>
                    </li>
                </ul>


                {/* <HomeMain /> */}


                <Switch>

                    {/* Route Paths */}
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