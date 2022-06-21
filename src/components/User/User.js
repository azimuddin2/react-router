import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './User.css'

const User = (props) => {
    const { id, name, username } = props.user;

    const navigate = useNavigate();

    const handleShowDetails = () => {
        // option_01
        navigate(`/user/${id}`)

        // option_02
        // navigate('/user/' + id);
    }

    return (
        <div className='user'>
            <h2>Name: {name}</h2>
            <Link to={'/user/' + id}>Show Detail</Link>
            <button className='btn btn-success ms-4' onClick={handleShowDetails}>{username} Id: {id}</button>
        </div>
    );
};

export default User;