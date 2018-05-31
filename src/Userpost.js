import React from 'react';
import './css/Userpost.css'
const Userpost = ({post}) => {

    console.log(post);
    
    return (
        <React.Fragment>
            <div className="row">
            <div className="col-4 offset-8">
            <img id="jena" src={require('./img/jenna_logo_small.svg')}/><p id="hello" >  {post}</p> <br/> 
         </div>
         </div>
        </React.Fragment>
    )
}
 
export default Userpost;