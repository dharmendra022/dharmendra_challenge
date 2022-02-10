import React from 'react';
import { BiRestaurant, BiTab } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import Login from './Login';

// BiRestaurant
// BiCart

const Header = () => {
    return (
        <>

            <div className='header'>
                <BiRestaurant  className='bie'/>
                <h1 className='rest'>Food's Restaurant</h1>
                <BiCart  className='bicart'/>
            </div>
            <Login/>
           
        </>
    )
}

export default Header;