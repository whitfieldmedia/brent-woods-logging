import React from 'react';
import './assets/scss/contact.scss';

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
                        <p className="contact-phone"> Brent Woods </p>
                        <p className="contact-phone"> (662) 283-4852 </p>
                        <p className="contact-phone"> brent@woodsloggingsales.com </p>
                    </div>
                    <div className="contact-column">
                        <p className="contact-address-header"> Address: </p>
                        <p className="contact-address"> 1234 Commerce St. <br/> Grenada, Ms, 38901 </p>
                    </div>
                </div>

            </div> 
        )
    }
}

export default Contact;