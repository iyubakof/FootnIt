import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/recipeActions';
import AllRecipes from './AllRecipes';

export class RecipeContainer extends Component {

    componentDidMount() {
        this.props.fetchRecipes();
    }

    render() {
        const { recipes, loading, error } = this.props;

        if (loading) {
            return <div className="loading">Loading</div>
        } else if (error) {
            return <div>ERROR: {error}</div>
        }

        return (
            <div>
                <AllRecipes recipes={recipes} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipes: () => dispatch({ type: actionTypes.FETCH_RECIPES_LOADING })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);
