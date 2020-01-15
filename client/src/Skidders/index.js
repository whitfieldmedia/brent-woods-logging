import React from 'react';
import { connect } from 'react-redux';
import { setCategory, addId, isClicked, setBrand } from '../redux/Category';
import { getInventory } from '../redux/Inventory';
import '../assets/scss/inventory.scss';
import Sort from '../Sort';
import Item from '../Inventory/Item';
import MapResults from './MapResults';
import { Switch, Route, Link } from 'react-router-dom';

class Inventory extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            clicked: false,
            count: 0,
            name: ''
        }
    }
    handleClick = (id, name) => {
        this.props.addId(id);
        this.setState({
            isClicked: true,
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
            if(this.props.category.id !== item._id) {
                return item
            }
        }).filter(item => {
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
            var name = item.name.split(' ').join('-')
            return (
                <div className="inventory-link-container" key={item._id}>
                    <Link className="inventory-link" to={`/inventory/${item.category}/${name}`}>
                        <MapResults key={item._id} item={item} addComma={this.addComma} handleClick={() => this.handleClick(item._id, item.name)} />
                    </Link>
                </div>
            )
        })
    } 
    showHeader = () => {
        if(this.props.category.category !== 'all') {
            return this.props.category.category.split('-').join(' ')
        } else {
            return "All Inventory"
        }
    }
    render() {
        console.log(this.props.category.id)
        return (
            <div className="inventory-page">
            <Route to="/:name">
                <Item />
            </Route>
            <div className="category-page">           
                <h1 className="category-header"> {this.showHeader()} For Sale </h1>     
                <div className="category-wrapper">
                    <div className="category-sort-wrapper">
                        <Sort id="sort-category-page" allBrands={this.state.brands} allCategories={this.state.category} />
                    </div>
                    <div className="inventory-page">
                        {this.showCategory()}
                    </div>
                </div>    
            </div>
            </div>
        )
    }
}

export default connect(state => state, { setCategory, addId, isClicked, setBrand, getInventory })(Inventory);