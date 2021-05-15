import React from 'react'
import {Link, NavLink ,withRouter} from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    const navStyle = {
        color: 'black'
    }
    return (
        <nav className="nav-links">
            <h3><Link style={navStyle} to='/cms'>CMS</Link></h3>
            <ul className='inputList'>
                {/* If you use Link */}
                <li><Link style={navStyle} to='/cms/article_input'>Article</Link></li>          
            </ul>
        </nav>
    )
}

export default Navigation
