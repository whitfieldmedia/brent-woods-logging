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
                        <p className="contact-email"> woodsforest@bellsouth.net </p>
                        <p className="contact-address"> 1901 U.S. 51, Grenada, Ms 38901 </p>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Contact;