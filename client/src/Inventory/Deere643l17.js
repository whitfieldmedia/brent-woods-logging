import React from 'react';
import { getInventory } from '../redux/Inventory';
import { connect } from 'react-redux';
import Item from './Item';
import '../assets/css/inventory.css'

class Deere643l17 extends React.Component {
    componentDidMount() {
        this.props.getInventory();
        window.scrollTo(0,0);
    }
    addComma = (num) => {
        if(num.length > 3) {
            return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else if(num) {
            return num;
        }
        return;
    }
    handleClick = () => {
        this.props.addId('');
        console.log(this.props.category.id)
    }
    render() {
        return (
            <div>
                {this.props.inventory.filter(item => {
                    if(item._id === '5e5e6f6a1c9d4400009cf6fb') {
                        return item;
                    } else {
                        return null;
                    }
                }).map(item => (
                    <Item item={item} />
                ))}
            </div>
        )
    }
}

export default connect(state => state, { getInventory })(Deere643l17);
