import React from 'react'
import {Link, NavLink ,withRouter} from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <nav className="nav-links">
            <h3><Link className='nav-child' to='/cms'>CMS</Link></h3>
            <br/>
            <ul className='inputList'>
                {/* If you use Link */}
                <li><Link className='nav-child' to='/cms/article_input'>article</Link></li>          
                <li><Link className='nav-child' to='/cms/category_input'>category</Link></li>          
                <li><Link className='nav-child' to='/cms/city_input'>city</Link></li>          
                <li><Link className='nav-child' to='/cms/contact_input'>contact</Link></li>          
                <li><Link className='nav-child' to='/cms/gender_input'>gender</Link></li>          
                <li><Link className='nav-child' to='/cms/order_input'>order</Link></li>          
                <li><Link className='nav-child' to='/cms/order_item_input'>order item</Link></li>          
                <li><Link className='nav-child' to='/cms/plant_input'>plant</Link></li>          
                <li><Link className='nav-child' to='/cms/plant_breeding_input'>plant breeding</Link></li>          
                <li><Link className='nav-child' to='/cms/price_list_input'>price list</Link></li>          
                <li><Link className='nav-child' to='/cms/review_input'>review</Link></li>          
                <li><Link className='nav-child' to='/cms/shipping_charges_input'>shipping charges</Link></li>          
                <li><Link className='nav-child' to='/cms/stock_input'>stock</Link></li>          
                <li><Link className='nav-child' to='/cms/user_input'>user</Link></li>          
                <li><Link className='nav-child' to='/cms/weight_input'>weight</Link></li>          
            </ul>
        </nav>
    )
}

export default Navigation
