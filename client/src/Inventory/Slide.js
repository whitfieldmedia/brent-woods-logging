import React from 'react';

const Slide = (props) => {
  var styles
  if(props.rotate) {
    styles = {
      backgroundImage: `url(${props.image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%',
      transform: 'rotate(90deg)'
    }
  } else {
    styles = {
      backgroundImage: `url(${props.image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    }
  }
      return <div className="slide" style={styles}></div>
}

export default Slide;