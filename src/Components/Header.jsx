// Header.jsx
// Header Component
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <div className="wrapper headerProps">
                <div className="headerH1Outer">
                    <h1><Link to="/index">
                        the film factory</Link></h1>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/movieSearch"><h2>current results</h2></NavLink></li>
                        <li><NavLink to="/allTimeResults"><h2>all-time results</h2></NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );

}

export default Header;