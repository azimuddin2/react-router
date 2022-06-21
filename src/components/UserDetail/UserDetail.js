import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [])

    return (
        <div className='border border-2 border-danger m-5 p-5 rounded-3'>
            <h1>This is user detail: {userId}</h1>
            <h2>{user.name}</h2>
            <h5>{user.email}</h5>
            <h5>{user.website}</h5>
            <h5>{user.phone}</h5>
            <p>{user.address?.city}</p>
            <p><small>{user.address?.geo.lat}</small></p>
        </div>
    );
};

export default UserDetail;