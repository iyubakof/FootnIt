import React, { Component } from 'react';
import './About.scss';

export class About extends Component {
    render() {
        return (
            <>
                <div className="intro-wrapper">
                    <h1>Recipe Finder</h1>
                    <div className="subtext">
                        <h5>Need help cooking tonight?</h5>
                        <p>Pick from the random recipes below or search by cuisine</p>
                    </div>
                </div>
            </>
        )
    }
}

export default About
