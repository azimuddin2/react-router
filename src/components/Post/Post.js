import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();

    const handlePostBtn = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className='post'>
            <h3>PostId: {id}</h3>
            <p>Title: {title}</p>
            <button onClick={handlePostBtn}>Post Details</button>
        </div>
    );
};

export default Post;