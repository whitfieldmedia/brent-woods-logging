import { combineReducers } from 'redux';

import category from './Category';
import inventory from './Inventory';


const rootReducer = combineReducers({
    category,
    inventory
})


export default rootReducer;