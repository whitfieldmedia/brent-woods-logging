import React from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/" className="nav-header-link"> 
                    <h1 className="nav-header"> Woods Logging Sales </h1>
                </Link>
                <ul className="navbar">
                    <li className="nav-link-holder">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
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