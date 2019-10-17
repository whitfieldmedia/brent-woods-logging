import axios from 'axios';

export function getInventory() {
    return dispatch => {
        axios.get('/getInventory').then(res => {
            dispatch({
                type: "GET_INVENTORY",
                inventory: res.data
            })
        })
    }
}

export default function reducer(inventory = [], action) {
    switch(action.type) {
        case "GET_INVENTORY":
            return action.inventory
        default:
            return inventory
    }
}