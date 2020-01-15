import React from 'react';
import logo from './assets/icons/woods_logo.png';
import './assets/scss/footer.scss';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-column">
                <img src={logo} className="footer-logo" alt="Brent Woods Logging Equipment Sales"/>
            </div>
            <div className="footer-column">
                <a href="tel:6622297785" target="_blank" rel="noreferrer noopener"  className="footer-par">
                    (662) 229-7785
                </a>
                <a href="mailto:woodsforest@bellsouth.net" target="_blank" rel="noreferrer noopener"  className="footer-par">
                    woodsforest@bellsouth.net
                </a>
                <a href="https://www.google.com/maps/place/Brent+Woods+Logging+Equipment+Sales/@33.7008969,-89.7663519,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x556e877999f7cd8c!8m2!3d33.7008969!4d-89.7641632" target="_blank" rel="noreferrer noopener" className="footer-par">
                    1901 U.S. 51, Grenada, Ms 38901
                </a>
            </div>
            <div className="footer-row">
                <p className="footer-disclaimer">
                    @2020 - <strong> Brent Woods Logging Equipment Sales  </strong>  All rights reserved. Build by <strong> <a className="footer-disclaimer-link" href="https://www.wemakeads.com" target="_blank" rel="noopener noreferrer"> Whitfield Media </a> </strong> 
                </p>
            </div>
        </footer>
    )
}

export default Footer;