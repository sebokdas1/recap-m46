import React from 'react';
import './SinglePost.css'
const SinglePost = (props) => {
    return (

        <div className='post'>
            <h4>{props.title}</h4>
            <p>{props.body}</p>
        </div>

    );
};

export default SinglePost;