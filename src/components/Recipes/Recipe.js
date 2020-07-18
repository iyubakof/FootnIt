import React, { Component } from 'react'
import { Card } from '@material-ui/core';
import { connect } from 'react-redux';

export class Recipe extends Component {
    render() {
        const { recipe } = this.props;
        return (
            <div>
                {/* <Card> */}
                    <p>{recipe.calories}</p>
                {/* </Card> */}
            </div>
        )
    }
}

export default connect()(Recipe);
