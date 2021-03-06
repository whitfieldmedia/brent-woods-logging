import React from 'react';
import './assets/css/about.css';

class About extends React.Component {
    render() {
        return (
            <div className="about-section">
                <h2 className="about-header"> About Us </h2>
                <p className="about-par">
                    Brent Woods Logging Equipment Sales is your go to forestry equipment & machinery dealer for buying machinery, equipment and attachments. We have a wide selection of equipment including Feller Bunchers, Skidders, Log Loaders, Log Trucks, Log Trailers, Dozers, and Attachments from Cat, John Deere, Tigercat, Prentice, Slasher, and other leading forestry equipment brands. 
                </p>
                <p className="about-par">
                    We are located in Grenada, Ms with clients across North America. When buying from us you're guaranteed to get the best equipment for your money. We try to include as much information about our equipment and attachments. If you're interested in finding out more information or want to buy equipment or attachments give the owner Brent Woods a call at (662) 229-7785. 
                </p>
            </div>
        )
    }
}

export default About;