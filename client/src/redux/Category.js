export function setCategory(category) {
    return dispatch => {
        dispatch({
            type: "SET_CATEGORY",
            category: category
        })
    }
}

export function addId(id) {
    return dispatch => {
        dispatch({
            type: "ADD_ID",
            id: id
        })
    }
}

export function isClicked(isClicked) {
    return dispatch => {
        dispatch({
            type: "IS_CLICKED",
            isClicked: isClicked
        })
    }
}

export function setBrand(brand) {
    return dispatch => {
        dispatch({
            type: "SET_BRAND",
            brand: brand
        })
    }
}

export function setSort(sortBy) {
    return dispatch => {
        dispatch({
            type: "SET_SORT",
            sortBy: sortBy
        })
    }
}



const initialState = {
    category: '',
    id: '',
    isClicked: false,
    brand: '',
    sortBy: ''
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case "SET_CATEGORY":
            return { 
                ...state,
                category: action.category
            }
        case "ADD_ID":
            return {
                ...state,
                id: action.id
            }
        case "IS_CLICKED":
            return {
                ...state,
                isClicked: action.isClicked
            }
        case "SET_BRAND":
            return {
                ...state,
                brand: action.brand
            }
        case "SET_SORT":
            return {
                ...state,
                sortBy: action.sortBy
            }
        default: 
            return state
    }
}
