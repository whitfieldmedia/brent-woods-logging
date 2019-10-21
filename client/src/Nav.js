import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/icons/logo3.svg';
import './assets/css/nav.css';

class Nav extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <Link to="/" className="nav-header-link"> 
                    <img src={logo} className="nav-header-logo" alt="Woods Logging"/>
                </Link>
                <ul className="navbar">
                    <li className="nav-link-holder">
                        <Link to="/shop-inventory" className="nav-link"> 
                            Inventory 
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav;