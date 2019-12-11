import React from 'react';
import { connect } from 'react-redux';
import { addId, isClicked } from '../redux/Category';
import MapResults from './MapResults';

class Recommended extends React.Component {
    showRecommended = () => {
        var category;
        var count = 0;
        if(this.props.category.category === 'attachments' || this.props.category.category === 'forklifts') {
            category = 'feller-bunchers';
        } else {
            this.props.inventory.filter(item => item._id === this.props.category.id).map(item => category = item.category)
        }
        return this.props.inventory.filter(item => ((item.category === category) && item._id !== this.props.category.id)).map((item, i) => {
            while(count < 3) {
                count = count + 1;
                return (
                    <MapResults key={item._id} item={item} addComma={this.addComma} handleClick={this.handleClick} />
                )
            }
        })
    }
    handleClick = (id) => {
        this.props.addId(id);
    }
    addComma = (num) => {
        if(num.length > 3) {
            return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else if(num) {
            return num;
        }
        return;
    }
    render() {
        return (
            <div className="recommended-holder">
                {this.showRecommended()}
            </div>
        )
    }
}

export default connect(state => state, { isClicked, addId })(Recommended);