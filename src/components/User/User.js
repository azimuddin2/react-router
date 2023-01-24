import React from 'react';
import { Link } from 'react-router-dom';
import './User.css';

const User = ({user}) => {
    const {id, name, email, username} = user;

    return (
        <div className='user'>
            <h3>UserId: {id}</h3>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p><small>UserName: <Link to={`/user/${id}`}>{username}</Link></small></p>
        </div>
    );
};

export default User;