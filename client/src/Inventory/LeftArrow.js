import React from 'react';

const LeftArrow = (props) => {
    return (
        <div className="backArrow" onClick={props.goToPrevSlide}>
            <i className="fa fa-arrow-left fa-lg" aria-hidden="true"></i>
        </div>
    )
}

export default LeftArrow;