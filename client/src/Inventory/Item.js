import React from 'react';
import Recommended from './Recommended';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import ExifOrientationImg from 'react-exif-orientation-img';

class Item extends React.Component {
    constructor() {
        super();
        this.state = {
            images: []
        }
    }
    componentDidMount() {
        window.scrollTo(0,0)
    }
    async componentDidUpdate(prevProps) {
        if(prevProps.category.id !== this.props.category.id) {
            window.scrollTo(0,0)
        }
    }
    mapItem = () => {
        return this.props.inventory.filter(item => item._id === this.props.category.id).map((item, i) => (
            <div className="inventory-wrapper" key={item._id}>
                <div className="inventory-slider-container">
                    <AliceCarousel className="carousel" autoHeight={true}>
                        {item.images.map(image => (
                            <ExifOrientationImg src={image} key={image} className={item._id === '5d9e44411c9d4400003420e0' ? "carousel-image-noflip" : "carousel-image"} alt={image} />
                        ))}
                    </AliceCarousel>
                </div>
                <div className="inventory-details-container">
                    <h2 className="inventory-name"> {item.name} </h2>
                    <p className="inventory-par"> {item.type} </p>
                    <p className="inventory-price"> ${this.addComma(item.price)} </p>
                    {item.hours
                    ?
                    <p className="inventory-hours"> {this.addComma(item.hours)} hours </p>
                    : null}
                    <p className="inventory-par"> {item.description} </p>
                    <div className="inventory-contact-container">
                        <h2 className="inventory-contact-header"> Contact </h2>
                        <p className="inventory-contact-name"> Brent Woods </p>
                        <p className="inventory-contact-phone"> (662) 229-7785 </p>
                        <p className="inventory-location"> Grenada, Ms </p>
                    </div>
                </div>
            </div>
            )
        )
    }
    addComma = (num) => {
        if(num.length > 3) {
            return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else if(num) {
            return num;
        }
        return;
    }
    render() {
        console.log("ITEM", this.state)
        return (
            <div className="item-page">
                <div className="go-back">
                    <Link to="/shop-inventory" className="back-link">
                        <i className="fas fa-chevron-left fa-sm"></i>  
                        Back To Inventory
                    </Link>
                </div>
                {this.mapItem()}
                <div className="separator"></div>
                <h2 className="recommended-header"> Recommended </h2>
                <div className="recommended-holder">
                    <Recommended />
                </div>
            </div>
        )
    }
}

export default connect(state => state)(Item);