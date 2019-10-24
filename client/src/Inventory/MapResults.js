import React from 'react';

const mapResults = (props) => {
    let item = props.item;
    var img = item.images[0];
    return (
        <div className="small-inventory-wrapper" key={item._id} onClick={() => props.handleClick(item._id)}>
            <div className="small-inventory-column inventory-image-small-container">
                <img src={img} key={item.name} className="inventory-image-small" alt={item.name}/>
            </div>
            <div className="small-inventory-column inventory-column2">
                <h2 className="inventory-small-name"> {item.name} </h2>
                <p className="inventory-small-price"> ${props.addComma(item.price)} </p>
                {(item.hours)
                ?
                <p className="inventory-small-par"> {props.addComma(item.hours)} hours </p>
                : null}
                <button className="inventory-cta"> 
                    Learn More
                    <i className="fas fa-angle-right"></i>
                </button>
            </div>
        </div>
    )
}

export default mapResults;