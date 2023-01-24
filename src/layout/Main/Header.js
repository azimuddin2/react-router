import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

    let activeStyle = {
        borderBottom: '2px solid orange',
        padding: '0px 6px'
    };

    return (
        <div className='nav-item'>
            <NavLink
                to='/home'
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }
            >
                Home
            </NavLink>
            <NavLink
                to='/users'
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }
            >
                Users
            </NavLink>
            <NavLink
                to='/posts'
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }
            >
                Posts
            </NavLink>
            <NavLink
                to='/about'
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }
            >
                About
            </NavLink>
            <NavLink
                to='/contact'
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }
            >
                Contact
            </NavLink>
        </div>
    );
};

export default Header;