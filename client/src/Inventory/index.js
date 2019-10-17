import React from 'react';
import { connect } from 'react-redux';
import { setCategory, addId, isClicked, setBrand } from '../redux/Category';
import { getInventory } from '../redux/Inventory';
import '../assets/scss/inventory.scss';
import * as loadImage from 'blueimp-load-image';
import Slider from './Slider';
import Sort from './Sort';

class Inventory extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            clicked: false,
            count: 0,
            recommendedImages: [],
            brands: [],
            category: []
        }
    }
    componentDidMount() {
        if(this.props.inventory.length === 0) {
            this.props.getInventory();
        }
        var categories = [];
        var brands = [];
        this.props.inventory.map(item => {
            console.log(item.category)
            if(!brands.includes(item.brand) && item.brand) {
                brands.push(item.brand);
            }
            if(!categories.includes(item.category) && item.category) {
                categories.push(item.category)
            }
        })
        this.setState({
            brands: brands,
            category: categories
        })
    }
    loadImage = (img, i) => {
        loadImage(
            img, 
            function(img) {
                document.getElementById(i).appendChild(img);
            },{
                maxWidth: 300,
                maxHeight: 300,
                canvas: true,
                orientation: 5
            }
        )
    }
    handleClick = (id) => {
        this.props.addId(id);
        this.props.isClicked(true);
    }
    showRecommended = () => {
        var category;
        var count = 0;
        if(this.props.category.category === 'attachments') {
            category = 'feller-bunchers'
        } else {
            category = this.props.category.category;
        }
        return this.props.inventory.filter(item => ((item.category === category) && item._id !== this.props.category.id)).map((item, i) => {
            while(count < 3) {
                count = count + 1;
                return this.mapResults(item, i)
            }
        })
    }
    addComma = (num) => {
        if(num.length > 3) {
            return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else if(num) {
            return num;
        }
        return;
    }
    showItem = () => {
        return this.props.inventory.filter(item => item._id === this.props.category.id).map((item, i) => {
            return (
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
                            <p className="inventory-location"> Grenada Ms </p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    mapResults = (item, i) => {
        let rotateImg = true
        if(item._id === '5d9e44411c9d4400003420e0') {
            rotateImg = false
        }
        var img = item.images[0];
        return (
            <div className="small-inventory-wrapper" key={item._id} onClick={() => this.handleClick(item._id)}>
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
                    <p className="inventory-small-text"> {item.type} </p>
                    <div className="text-row">
                        <p className="inventory-small-header"> Price: </p>
                        <p className="inventory-small-price"> ${this.addComma(item.price)} </p>
                    </div>
                    {(item.hours)
                    ?
                    <div className="text-row">
                        <p className="inventory-small-header"> Hours: </p>
                        <p className="inventory-small-par"> {this.addComma(item.hours)} </p>
                    </div>
                    : null}
                </div>
            </div>
        )
    }
    compareValues = (a, b) => {
        var sortBy = this.props.category.sortBy;
        if(sortBy === 'lowPrice') {
            return Number(a.price) - Number(b.price)
        } else if(sortBy === 'highPrice') {
            return Number(b.price) - Number(a.price)
        } else if(sortBy === 'lowHours') {
            return Number(a.hours) - Number(b.hours)
        } else if(sortBy === 'highHours') {
            return Number(b.hours) - Number(a.hours)
        } else if(sortBy === 'newYear') {
            return Number(b.year) - Number(a.year)
        } else if(sortBy === 'oldYear') {
            return Number(a.year) - Number(b.year)
        } else {
            return;
        }
    }
    showCategory = () => {
        return this.props.inventory.filter(item => {
            if(this.props.category.category !== 'all') {
                return item.category === this.props.category.category
            } return item.category
        }).filter(item => { if(this.props.category.brand === 'all') { return item } else if(this.props.category.brand.length > 0 && this.props.category.brand !== 'all') { return item.brand === this.props.category.brand } else { return item }}).sort(this.compareValues).map((item, i) => {
            return this.mapResults(item, i)
        })
    } 
    header = () => {
        var category = this.props.category.category;
        var header = category.toLowerCase().split('-')
        for(var i = 0; i < header.length; i++) {
            header[i] = header[i].charAt(0).toUpperCase() + header[i].substring(1);
        }
        header = header.join(' ');
        return header;
    }
    render() {
        return (
            this.props.category.isClicked 
            ? 
            <div className="item-page">
                {this.showItem()}
                <h2 className="recommended-header"> Recommended </h2>
                <div className="recommended-holder">
                    {this.showRecommended()}
                </div>
            </div>
            :
            <div className="category-page">                    
                <Sort id="sort-category-page" allBrands={this.state.brands} allCategories={this.state.category} />
                <div className="inventory-page">
                    <h1 className="category-header"> {this.header()} For Sale </h1>
                    {this.showCategory()}
                </div>
            </div>

        )
    }
}

export default connect(state => state, { setCategory, addId, isClicked, setBrand, getInventory })(Inventory);