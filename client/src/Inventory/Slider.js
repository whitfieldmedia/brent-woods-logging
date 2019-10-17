import React from 'react';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Slide from './Slide';
import '../assets/scss/slider.scss';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            translateValue: 0,
            width: '600px',
            height: '600px',
            position: 'relative',
            zIndex: 0,
            margin: '0 auto',
            left: '0',
            top: '0',
            backgroundColor: 'inherit',
            fullScreen: false
        }
    }
    goToPrevSlide = () => {
        var index;
        if(this.state.currentIndex === 0) {
            index = this.props.images.length -1;
        } 
        else {
            index = this.state.currentIndex - 1;
        }
        this.setState({
            translateValue: this.slideWidth() * -index,
            currentIndex: index
        })
    }
    goToNextSlide = () => {
        var index;
        if(this.state.currentIndex === this.props.images.length - 1) {
            index = 0;
        } else {
            index = this.state.currentIndex + 1;
        }
        this.setState({
            currentIndex: index,
            translateValue: this.slideWidth() * -index
        })
    }
    slideWidth = () => {
        if(this.state.fullScreen) {
            return window.innerWidth;
        }
        return document.querySelector('.slide').clientWidth
    }
    handleFullScreen = () => {
        var top = 0
        var offset = window.innerWidth - window.innerHeight;
        console.log(offset)
        if(offset < 0) {
            top = Math.abs(offset / 2);
        }
        this.setState({
            fullScreen: true,
            width: '100vw',
            height: '100vh',
            position: 'absolute',
            zIndex: 1000,
            margin: 'auto',
            top: top,
            translateValue: window.innerWidth * -this.state.currentIndex,
            backgroundColor: 'rgba(0,0,0,.9)'
        })
        this.slideWidth();
    }
    handleClose = () => {
        if(window.innerWidth < 600) {
            this.setState({
                fullScreen: false,
                width: '100vw',
                height: '133vw',
                position: 'relative',
                zIndex: 0,
                margin: '0 auto',
                top: 0,
                translateValue: window.innerWidth * -(this.state.currentIndex),
                backgroundColor: 'inherit'
            })
        } else {
            this.setState({
                fullScreen: false,
                width: '600px',
                height: '600px',
                position: 'relative',
                zIndex: 0,
                margin: '0 auto',
                top: 0,
                translateValue: (600 * -(this.state.currentIndex)),
                backgroundColor: 'inherit'
            })
        }
    }
    showSlide = () => {
        if(this.props.itemId === '5d9e44411c9d4400003420e0') {
            return this.props.images.map(image => (
                <Slide key={image} image={image} rotate={false} />
            ))
        }
        return this.props.images.map(image => (
            <Slide key={image} image={image} rotate={true} />
        ))
    }
    render() { 
        return (
            <div className="slider" 
                style={{ width: this.state.width, height: this.state.height, zIndex: this.state.zIndex, position: this.state.position, margin: this.state.margin, left: this.state.left, paddingTop: (this.state.top / 2), paddingBottom: this.state.top, backgroundColor: this.state.backgroundColor, maxWidth: '100vw', top: 0, maxHeight: '133vw'
            }}>
                <div className="slider-wrapper" 
                    style={{
                        maxWidth: '100vw', maxHeight: '133vw',
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                }}>
                    {this.showSlide()}
                </div>

                {this.state.fullScreen 
                ?
                <div>
                    <div className="close-full-screen" onClick={this.handleClose}>
                        <p className="close-x"> X </p>
                    </div> 
                    <div className="backArrow-big" onClick={this.goToPrevSlide}>
                        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className="nextArrow-big" onClick={this.goToNextSlide}>
                        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
                :
                <div>
                    <div className="full-screen" onClick={this.handleFullScreen}>
                        <i className="fas fa-compress fa-2x"></i>
                    </div>
                    <LeftArrow goToPrevSlide={this.goToPrevSlide} />
                    <RightArrow goToNextSlide={this.goToNextSlide} />
                </div>
                }
            </div>
        )
    }
}

export default Slider