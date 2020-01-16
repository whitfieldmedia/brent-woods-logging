import React from 'react';
import { connect } from 'react-redux';
import { setCategory, addId, isClicked, setBrand } from '../redux/Category';
import { getInventory } from '../redux/Inventory';
import '../assets/scss/inventory.scss';
import Sort from './Sort';
import Item from './Item';
import MapResults from './MapResults';
import { Link, Route } from 'react-router-dom';

class Inventory extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            clicked: false,
            count: 0,
            recommendedImages: [],
            brands: [],
            category: [],
            name: '',
            useParams: false
        }
    }
    componentDidMount() {
        if(this.props.category.id) {
            this.setState({
                useParams: true
            })
        }
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
    componentDidUpdate(prevProps) {
        if(this.props.history.location.pathname !== "/inventory") {
            const name = this.props.history.location.pathname.split('/').slice(-1)[0]
            if(!this.state.useParams) {
                this.setState({
                    useParams: true
                })
            }
            return this.props.inventory.filter(item => item.name === name)
        } else if (this.state.useParams) {
            this.setState({
                useParams: false
            })
        }
        if(this.props.match.params.length > 0 && !this.state.useParams && prevProps.match.params !== this.props.match.params) {
            this.setState({
                useParams: true
            })
        }
    }
    handleClick = (id, name) => {
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
                    <Link className="inventory-link" to={`/inventory/${name}`}>
                        <MapResults key={item._id} item={item} addComma={this.addComma} handleClick={() => this.handleClick(item._id, item.name)} />
                    </Link>
                </div>
            )
        })
    } 
    showHeader = () => {
        if(this.props.category.category !== 'all' && this.props.category.category.length > 1) {
            console.log(this.props.category.category)
            return this.props.category.category.split('-').join(' ')
        } else {
            return "All Inventory"
        }
    }
    render() {
        return (
            <div className="inventory-page">
                <Route path={`/inventory/:name`} component={Item} />
            {/* {this.state.useParams
                ?  <Item />
                : */}
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
              //  }
            </div>

        )
    }
}

export default connect(state => state, { setCategory, addId, isClicked, setBrand, getInventory })(Inventory);