import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [postId])

    return (
        <div className='border border-danger border-2 m-5 p-5 rounded-3'>
            <h3>This is post detail for: {postId}</h3>
            <h5>{post.title}</h5>
            <p><small>{post.body}</small></p>
        </div>
    );
};

export default PostDetail;