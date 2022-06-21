import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, [])

    return (
        <div className='border m-5 p-5 border-danger border-2 rounded-3'>
            <h1 className='text-warning'>Every posts facebook ever had: {posts.length}</h1>
            {
                posts.map(post => <Link
                    to={`/posts/${post.id}`}
                    key={post.id}
                >{post.id} </Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;