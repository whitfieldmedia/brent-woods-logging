import React from 'react';
import './assets/css/contact.css';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact-section">
                <h2 className="contact-header"> Contact </h2>
                <p className="contact-par">
                    If you have any questions or want to buy something give us a call or shoot us an email. <br/>
                </p>
                <div className="contact-row">
                    <div className="contact-column">
                        <p className="contact-name"> Brent Woods </p>
                        <a className="contact-phone" href="tel:6622297785"> (662) 229-7785 </a>
                        <a className="contact-phone" href="mailto:woodsforest@bellsouth.net"> woodsforest@bellsouth.net </a>
                        <a className="contact-phone" href="https://www.google.com/maps/place/Brent+Woods+Logging+Equipment+Sales/@33.7008969,-89.7663519,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x556e877999f7cd8c!8m2!3d33.7008969!4d-89.7641632" target="_blank" rel="noreferrer noopener"> 1901 U.S. 51, Grenada, Ms 38901 </a>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Contact;