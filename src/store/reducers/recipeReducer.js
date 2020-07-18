import * as ActionTypes from '../actions/recipeActions';

//1. initial state
const initialState = {
    recipes: [],
    loading: false,
    error: ''
}

//3. Reducer
const recipeReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_RECIPES_LOADING:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                recipes: action.recipes,
                loading: false
            }
        case ActionTypes.FETCH_RECIPES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default: 
            return state;
    }
    
    // return state;
}
export default recipeReducer;