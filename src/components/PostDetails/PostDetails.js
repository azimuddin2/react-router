import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    return (
        <div>
            <h1>Post Details</h1>
            <div style={{border: '2px solid orange', margin: '40px', padding: '20px', borderRadius: '20px' }}>
                <h4>PostId: {id}</h4>
                <h5>Title: {title}</h5>
                <h6>{body}</h6>
            </div>
        </div>
    );
};

export default PostDetails;