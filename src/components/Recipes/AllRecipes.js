import React, { Component } from 'react';
import Recipe from './Recipe';

export class AllRecipes extends Component {
    render() {
        return (
            <div>
                {this.props.recipes.map((recipe) => (
                    <Recipe recipe={recipe} key={recipe.boomarked}/>
                ))}
            </div>
        )
    }
}

export default AllRecipes
