import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './UserDetails.css';

const UserDetails = () => {
    const user = useLoaderData();
    const { id, name, email, username, address, phone, website, company } = user;

    return (
        <div>
            <h1>User Details Information</h1>
            <div className='user-details'>
                <h2>UserId: {id}</h2>
                <h3>Name: {name}</h3>
                <p>Email: {email}</p>
                <p>UserName: {username}</p>
                <p>Phone Number: {phone}</p>
                <p>Website: {website}</p>
                <p>Address: {address.street}</p>
                <h4>Company:</h4>
                <p>Name: {company.name}</p>
                <p>CatchPhrase: {company.catchPhrase}</p>
                <p>BS: {company.bs}</p>
            </div>
        </div>
    );
};

export default UserDetails;