import React from 'react';
import './userpost.css'
const Userpost = ({post}) => {

    console.log(post);
    
    return (
        <React.Fragment>
        <p id="hello" >{post}</p><br/>
        </React.Fragment>
    )
}
 
export default Userpost;