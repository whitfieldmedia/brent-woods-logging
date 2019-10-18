import React from 'react';
import Slider from './Slider';
import Recommended from './Recommended';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Item extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }
    componentDidUpdate(prevProps) {
        if(prevProps.category.id !== this.props.category.id) {
            window.scrollTo(0,0)
        }
    }
    mapItem = () => {
        return this.props.inventory.filter(item => item._id === this.props.category.id).map((item, i) => (
            <div className="inventory-wrapper" key={item._id}>
                <div className="inventory-slider-container">
                    <Slider images={item.images} itemId={item._id} />
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
                        <p className="inventory-contact-phone"> (662) 123-4567 </p>
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
        console.log("ITEM", this.props)
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