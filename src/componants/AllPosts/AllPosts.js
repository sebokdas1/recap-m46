import React, { useEffect, useState } from 'react';
import SinglePost from '../SinglePost/SinglePost';
import './AllPosts.css'

const AllPosts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h1>Total Posts: {posts.length}</h1>
            <div className='div-container'>
                {
                    posts.map(post => <SinglePost
                        key={post.id}
                        title={post.title}
                        body={post.body}
                    ></SinglePost>)
                }
            </div>
        </div>
    );
};

export default AllPosts;