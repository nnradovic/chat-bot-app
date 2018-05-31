import React from 'react' 
import "./footer.css"




 const Footer = () => {
	return (
		<div className="col-md-4 offset-md-4 col-10 offset-1 footer">
			<p id="about">Terms / Conditions | Privacy Policy | <span className="power-span">Powered by</span> <img id="jena" src={require('./img/jenna_logo_small.svg')}/></p>
		</div>
	)
}

export default Footer