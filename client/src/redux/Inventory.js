import axios from 'axios';

function setInventory(inventory) {
    return {
        type: "SET_INVENTORY",
        inventory
    }
}

export function getInventory() {
    return dispatch => {
        axios.get('/inventory')
            .then(res => {
                console.log(res);
                dispatch(setInventory(res.data))
            }).catch(err => {
                console.log(err)
            })
    }
}

export default function reducer(inventory = [], action) {
    switch(action.type) {
        case "SET_INVENTORY":
            return action.inventory
        default:
            return inventory
    }
}