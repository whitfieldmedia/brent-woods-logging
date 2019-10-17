import React from 'react';
import { Link } from 'react-router-dom';
import './assets/scss/nav.scss';

class Nav extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <Link to="/" className="nav-header-link"> 
                    <h2 className="nav-header">  
                        Woods Logging  
                    </h2> 
                </Link>
                <ul className="navbar">
                    <li className="nav-link-holder">
                        <Link to="/shop-inventory" className="nav-link"> 
                            Inventory 
                        </Link>
                    </li>
                    <li className="nav-link-holder">
                        <Link to="/contact" className="nav-link"> 
                            Contact 
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav;