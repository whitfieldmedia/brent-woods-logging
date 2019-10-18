import React from 'react';

const mapResults = (props) => {
    let item = props.item;
    let rotateImg = true;
    if(item._id === '5d9e44411c9d4400003420e0') {
        rotateImg = false;
    }
    var img = item.images[0];
    return (
        <div className="small-inventory-wrapper" key={item._id} onClick={() => props.handleClick(item._id)}>
            <div className="small-inventory-column inventory-image-small-container">
                {rotateImg
                ?
                <div id={item._id} style={{ backgroundImage: `url(${img})` }} className="inventory-image-small" alt={item.name}></div>
                :
                <div id={item._id} style={{ backgroundImage: `url(${img})` }} className="inventory-image-small-portrait" alt={item.name}> </div> 
                }
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