import React from 'react';
import { connect } from 'react-redux';
import { setCategory, addId, isClicked, setBrand } from '../redux/Category';
import { getInventory } from '../redux/Inventory';
import '../assets/scss/inventory.scss';
import Sort from './Sort';
import MapResults from './MapResults';
import { Redirect } from 'react-router-dom';

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
        this.props.getInventory();
        window.scrollTo(0,0);
        var categories = [];
        var brands = [];
        this.props.inventory.map(item => {
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
    handleClick = (id) => {
        this.props.addId(id);
        this.setState({
            isClicked: true
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
        }).filter(item => { 
            if(this.props.category.brand === 'all') { 
                return item 
            } else if(this.props.category.brand.length > 0 && this.props.category.brand !== 'all') { 
                return item.brand === this.props.category.brand 
            } else { 
                return item 
            }
        }).sort(this.compareValues).map((item, i) => {
            return (
                <MapResults key={item._id} item={item} addComma={this.addComma} handleClick={this.handleClick} />
            )
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
        console.log(this.props)
        return (
            this.state.isClicked 
            ? 
            <Redirect to="/for-sale" />
            :
            <div className="category-page">           
                <h1 className="category-header"> {this.header()} For Sale </h1>     
                <div className="category-wrapper">
                    <div className="category-sort-wrapper">
                        <Sort id="sort-category-page" allBrands={this.state.brands} allCategories={this.state.category} />
                    </div>
                    <div className="inventory-page">
                        {this.showCategory()}
                    </div>
                </div>    
            </div>
        )
    }
}

export default connect(state => state, { setCategory, addId, isClicked, setBrand, getInventory })(Inventory);