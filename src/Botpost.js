import React from 'react';
import './botposts.css'
const Botpost = ({ post }) => {

    const displayOptions = () => {
		if(post.message.options) {
			return post.message.options.map((option, i) => {
				return <span className="options" key={i}>{option}</span>
			})
		}
	}
    return (
        <div className="botPost">
          <img id="spartan" src={require('./img/spartan.png')}/> <p>{post.message.text}<br /></p>
          <p className="options-holder">{displayOptions()}</p>
            
        </div>
    )
}

export default Botpost;