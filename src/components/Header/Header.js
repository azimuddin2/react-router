import React from 'react';
// import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='bg-dark text-light py-3 d-flex justify-content-center'>

            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link> */}

           <CustomLink to="/">Home</CustomLink>
           <CustomLink to="/about">About</CustomLink>
           <CustomLink to="/users">Users</CustomLink>
           <CustomLink to="/posts">Posts</CustomLink>
           <CustomLink to="/contact">Contact</CustomLink>
           <CustomLink to="/login">Login</CustomLink>
        </nav>
    );
};

export default Header;