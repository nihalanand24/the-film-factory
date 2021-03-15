// Header.jsx
// Header Component
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <div className="wrapper headerProps">
                <h1><Link to="/index">
                    the film factory</Link></h1>
                <nav>
                    <ul>
                        <li><Link to="/movieSearch"><h2><a>current results</a></h2></Link></li>
                        <li><Link to="/allTimeResults"><h2><a>all-time results</a></h2></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );

}

export default Header;
