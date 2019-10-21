import React from 'react';
import Gallery from 'react-grid-gallery';

class ImageGallery extends React.Component {
    constructor() {
        super();
        this.state = {
            images: []
        }
    }
    componentDidMount() {
        this.mapImages()
    }
    mapImages = () => {
        return this.props.images.map(image => {
            this.setState({
                images: [...this.state.images, { src:`${image}`, thumbnail:`${image}`, thumbnailWidth: 331, thumbnailHeight: 180 } ]
            })
        })
    }
    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div className="slider-container">
                <Gallery images={this.state.images} margin="0" />
            </div>
        )
    }
}

export default ImageGallery;