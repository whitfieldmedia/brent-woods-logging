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
                        <p className="contact-phone"><strong> Brent Woods </strong></p>
                        <p className="contact-phone"> (662) 229-7785 </p>
                        <p className="contact-phone"> woodsforest@bellsouth.net </p>
                    </div>
                </div>

            </div> 
        )
    }
}

export default Contact;