import { call, takeEvery, put, all, select, take } from 'redux-saga/effects';
import axios from 'axios';
import * as API from '../../constants/Api';
import * as actionTypes from '../actions/recipeActions';

var query = API.rootQuery;

async function fetchAsync(funct) {
    const response = await funct;
    if(response.ok) {
        return await response.json();
    } else {
        console.error('Error fetching recipes');
    }
}

function* fetchRecipes() {
    try{
        console.log('Fetching Recipes...');
        const recipes = yield fetchAsync(axios.get(`${API.rootURL}${query}&app_id=${API.appId}&app_key=${API.apiKey}`));
        console.log(recipes.data);
        yield put({
            type: actionTypes.FETCH_RECIPES_SUCCESS, 
            recipes: recipes.data.hits
        })
    } catch (err) {
        yield put({
            type: actionTypes.FETCH_RECIPES_ERROR,
            error: err.message
        });
    }
}

function* watchFetchRecipes() {
    yield takeEvery(actionTypes.FETCH_RECIPES_LOADING, fetchRecipes)
}

function* watchAndLog() {
    while(true) {
        //Listen to every action
        const action = yield take('*');
        //extracts the state
        const state = yield select();

        console.log('action: ', action.type);
        console.log('state after: ', state.recipes);
    }
}

export default function* recipeSaga() {
    yield all([
        watchFetchRecipes(),
        watchAndLog()
    ])
}