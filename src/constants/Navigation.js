import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Navigation extends Component {
    render() {
        return (
            <>
                <ul className="navbar">
                    <li className="nav-item"><Link to='/recipes' className='link'>Recipes</Link></li>
                    <li className="nav-brand"><Link to='/' className='link'>Grandma's Book</Link></li>
                    <li className="nav-item"><Link to='/cuisines' className='link'>Cuisines</Link></li>
                </ul>
            </>
        )
    }
}
