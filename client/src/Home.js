import React from 'react';
import feller from './assets/icons/feller-buncher.svg';
import loader from './assets/icons/log-loader.svg';
import logTruck from './assets/icons/log-truck.svg';
import skidder from './assets/icons/skidder.svg';
import logTrailer from './assets/icons/log-trailer.svg';
import attachments from './assets/icons/attachments.svg';
import dozer from './assets/icons/dozer.svg';
import forklift from './assets/icons/forklift-truck.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategory, addId, isClicked, setBrand, setSort } from './redux/Category';
import Contact from './Contact';
import About from './About';
import './assets/css/home.css';

class Home extends React.Component {
    handleClick = (category) => {
        this.props.setCategory(category);
        this.props.addId('');
        this.props.isClicked(false)
        this.props.setBrand('')
        this.props.setSort('')
    }
    render() {
        return (
            <div className="home-page">
                <div className="home-top-section">
                    <div className="home-inventory-section">
                        <h2 className="header2"> Logging Equipment For Sale </h2>
                        <div className="home-inventory-container">
                            <Link to="/shop-inventory" className="home-inventory-holder" onClick={() => this.handleClick('feller-bunchers')}>
                                <img src={feller} className="home-inventory-icon" alt="Feller Bunchers"/>
                                <p className="home-inventory-name"> Feller Bunchers </p>
                            </Link>
                            <Link to="/shop-inventory" className="home-inventory-holder" onClick={() => this.handleClick('skidders')}>
                                <img src={skidder} className="home-inventory-icon" alt="Skidders" />
                                <p className="home-inventory-name"> Skidders </p>
                            </Link>
                            <Link to="/shop-inventory" className="home-inventory-holder" onClick={() => this.handleClick('log-loaders')}>
                                <img src={loader} className="home-inventory-icon" alt="Loaders" />
                                <p className="home-inventory-name"> Loaders </p>
                            </Link>
                            <Link to="/shop-inventory" className="home-inventory-holder" onClick={() => this.handleClick('trucks')}>
                                <img src={logTruck} className="home-inventory-icon" alt="Log Trucks"/>
                                <p className="home-inventory-name"> Log Trucks </p>
                            </Link>
                            <Link to="/shop-inventory" className="home-inventory-holder" onClick={() => this.handleClick('trailers')}>
                                <img src={logTrailer} className="home-inventory-icon" alt="Log Trailers"/>
                                <p className="home-inventory-name"> Log Trailers </p>
                            </Link>
                            <Link to="/shop-inventory" className="home-inventory-holder" onClick={() => this.handleClick('dozers')}>
                                <img src={dozer} className="home-inventory-icon" alt="Dozers"/>
                                <p className="home-inventory-name"> Dozers </p>
                            </Link>
                            <Link to="/shop-inventory" className="home-inventory-holder" onClick={() => this.handleClick('attachments')}>
                                <img src={attachments} className="home-inventory-icon" alt="Attachments" />
                                <p className="home-inventory-name"> Attachments </p>
                            </Link>
                            <Link to="/shop-inventory" className="home-inventory-holder" onClick={() => this.handleClick('forklifts')}>
                                <img src={forklift} className="home-inventory-icon" alt="Forklift" />
                                <p className="home-inventory-name"> Forklifts </p>
                            </Link>
                        </div>
                    </div>
                </div>
                <About />
                <Contact />
            </div>
        )
    }
}

export default connect(state => state, { setCategory, addId, isClicked, setBrand, setSort })(Home);