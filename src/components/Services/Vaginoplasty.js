import React from 'react';
import './Vaginoplasty.css';
import ProfileImg from '../photos/justin-essah-YZqNFG9WVYU-unsplash.jpg';


function Vaginoplasty(){

	return(
		<div className='vaginoplasty__main'>
			<h1>Vaginoplasty</h1>
			<div className='vaginoplasty__image'>
				<img src={ ProfileImg } alt="beautiful black woman" />
			</div>
			<div className='vaginoplasty__content'>
				<h3>Info</h3>
				<p>
				Vaginoplasty (also known as posterior colporrhaphy) is a procedure designed to tighten the vagina. 
				An alternative is noninvasive vaginal tightening through heating tissues with radiofrequency waves or laser. 
				Patients with significant laxity may not experience a benefit from these treatments and may be better candidates for surgical tightening with vaginoplasty. 
				A vaginoplasty brings the separated muscles together, and the extra mucosa skin from the back side of the vagina is removed. 
				The external skin can also be removed for a more aesthetic appearance. 
				Once the amount of tightening to be done is determined, a pie-shape wedge is marked to delineate the extra skin to be removed from inside the vagina. 
				Beneath the skin, the tissues are tightened with strong sutures. 
				Once the vaginal canal has been tightened, the mucosal skin is sutured closed. 
				If there is external skin that protrudes, this can be reduced as well for a more aesthetic result. 
				This procedure typically results in a tighter vaginal canal, which can help enhance sexual satisfaction.
				</p>
			</div>

		</div>
	);

}

export default Vaginoplasty;