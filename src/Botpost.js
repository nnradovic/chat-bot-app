import React from 'react';
import './botposts.css'
const Botpost = ({ post }) => {
    return (
        <div className="botPost">
            <p>{post.message.text}<br />{post.message.options ? post.message.options : null}</p>
        </div>
    )
}

export default Botpost;