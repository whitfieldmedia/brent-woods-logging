import React from 'react';
import { setBrand, setCategory, setSort } from '../redux/Category';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/css/sort.css';

class Sort extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sortClicked: false,
            categoryClicked: false,
            brandClicked: false
        }
    }
    componentDidMount() {
        if(this.state.sortClicked || this.state.categoryClicked || this.state.brandClicked) {
            this.setState({
                sortClicked: false,
                categoryClicked: false,
                brandClicked: false
            })
        }
    }
    sortByBrand = (brand) => {
        this.props.setBrand(brand)
        this.setState({
            brandClicked: false,
            categoryClicked: false,
            sortClicked: false
        })
    }
    sortByCategory = (category) => {
        this.props.setCategory(category)
        this.setState({
            brandClicked: false,
            categoryClicked: false,
            sortClicked: false
        })
    }
    handleSort = (sortBy) => {
        this.props.setSort(sortBy)
        this.setState({
            brandClicked: false,
            categoryClicked: false,
            sortClicked: false
        })
    }
    handleSortClick = () => {
        if(window.innerWidth > 850) {
            return;
        }
        this.setState({
            sortClicked: !this.state.sortClicked
        })
    }
    handleCategoryClick = () => {
        if(window.innerWidth > 850) {
            return;
        }
        this.setState({
            categoryClicked: !this.state.categoryClicked
        })
    }
    handleBrandClick = () => {
        if(window.innerWidth > 850) {
            return;
        }
        this.setState({
            brandClicked: !this.state.brandClicked
        })
    }
    handleClose = () => {
        this.setState({
            brandClicked: false,
            categoryClicked: false,
            sortClicked: false
        })
    }
    render() {
        return (
            <div className="sort-container">
                <div className="sort-column">
                    <h2 className="sort-header" onClick={this.handleSortClick}> Sort By </h2>
                    <ul className={this.state.sortClicked ? "sort-wrapper-show" :"sort-wrapper"}>
                        <li className="sort-item" onClick={() => this.handleSort('lowPrice')}> 
                            <span className={(this.props.category.sortBy === 'lowPrice') ? 'check-box check-box-clicked' : 'check-box'}>
                                <i className="fas fa-check fa-xs"></i>
                            </span> 
                            Price: Low to High  
                        </li>
                        <li className="sort-item" onClick={() => this.handleSort('highPrice')}> 
                            <span className={(this.props.category.sortBy === 'highPrice') ? 'check-box check-box-clicked' : 'check-box'}>
                                <i className="fas fa-check fa-xs"></i>    
                            </span> 
                            Price: High to Low 
                        </li>
                        <li className="sort-item" onClick={() => this.handleSort('lowHours')}> 
                            <span className={(this.props.category.sortBy === 'lowHours') ? 'check-box check-box-clicked' : 'check-box'}>
                            <i className="fas fa-check fa-xs"></i>    
                            </span> 
                            Hours: Low to High 
                        </li>
                        <li className="sort-item" onClick={() => this.handleSort('highHours')}> 
                            <span className={(this.props.category.sortBy === 'highHours') ? 'check-box check-box-clicked' : 'check-box'}>
                            <i className="fas fa-check fa-xs"></i>    
                            </span> 
                            Hours: High to Low 
                        </li>
                        <li className="sort-item" onClick={() => this.handleSort('newYear')}> 
                            <span className={(this.props.category.sortBy === 'newYear') ? 'check-box check-box-clicked' : 'check-box'}>
                            <i className="fas fa-check fa-xs"></i>
                            </span> 
                            Year: Newest First 
                        </li>
                        <li className="sort-item" onClick={() => this.handleSort('oldYear')}> 
                            <span className={(this.props.category.sortBy === 'oldYear') ? 'check-box check-box-clicked' : 'check-box'}><i className="fas fa-check fa-xs"></i></span> 
                            Year: Oldest First 
                        </li>
                    </ul>
                </div>
                <div className="sort-column">
                    <h2 className="sort-header" onClick={this.handleCategoryClick}> Category </h2>
                    <ul className={this.state.categoryClicked ? "sort-wrapper-show" :"sort-wrapper"}>
                        <li className="sort-item" onClick={() => this.sortByCategory('all')} > 
                            <span className={(this.props.category.category === 'all') ? 'check-box check-box-clicked' : 'check-box'}><i className="fas fa-check fa-xs"></i></span>
                            View All 
                        </li>
                        {this.props.allCategories.map(type => (
                            <li className="sort-item" onClick={() => this.sortByCategory(type)} key={type}>
                                <span className={(this.props.category.category === type) ? 'check-box check-box-clicked' : 'check-box'}><i className="fas fa-check fa-xs"></i></span>
                                {type} 
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sort-column">
                    <h2 className="sort-header" onClick={this.handleBrandClick}> Manufacturer </h2>
                    <ul className={this.state.brandClicked ? "sort-wrapper-show" :"sort-wrapper"}>
                        <li className="sort-item" onClick={() => this.sortByBrand('all')}>
                            <span className={(this.props.category.brand === 'all') ? 'check-box check-box-clicked' : 'check-box'}><i className="fas fa-check fa-xs"></i></span>
                            View All
                        </li>
                        {this.props.allBrands.map(brand => (  
                            <li className="sort-item" onClick={() => this.sortByBrand(brand)} key={brand}> 
                                <span className={(this.props.category.brand === brand) ? 'check-box check-box-clicked' : 'check-box'}><i className="fas fa-check fa-xs"></i></span>
                                {brand} 
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(state => state, { setBrand, setCategory, setSort })(Sort)