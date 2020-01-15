import React from 'react';
import logo from './assets/icons/woods_logo.png';
import { Link } from 'react-router-dom';
import { setCategory } from './redux/Category';
import { connect } from 'react-redux';
import './assets/scss/nav.scss';

class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            isClicked: false
        }
    }
    handleClick = () => {
        return this.setState({
            isClicked: !this.state.isClicked
        })
    }
    render() {
        return (
            <div className="navbar-container">
                <Link to="/" className="nav-header-link" id="nav-logo-wrapper"> 
                    <img src={logo} className="nav-header-logo" alt="Brent Woods Logging"/>
                </Link>
                <ul className="navbar">
                    <li className="nav-link-holder">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-link-holder">
                        <Link to="/inventory" className="nav-link"> 
                            Inventory 
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default connect(state => state, { setCategory })(Nav);