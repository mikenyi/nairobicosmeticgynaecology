import React from 'react';
import './Vaginal_Rejuvenation.css';
import ProfileImg from '../photos/justin-essah-YZqNFG9WVYU-unsplash.jpg';

function VaginalRejuvenation(){

	return(
		<div className='vaginal__main'>
			<h1>Vaginal Rejuvenation</h1>
			<div className='vaginal__image'>
				<img src={ ProfileImg } alt="beautiful black woman" />
			</div>
			<div className='vaginal__content'>
				<h3>Info</h3>
				<p>The term vaginal rejuvenation covers several different procedures. It is sometimes called female genital plastic surgery, female genital rejuvenation surgery, female genital cosmetic surgery, vulvovaginal plastic surgery and designer vagina surgery, among other terms. Among the procedures that comprise female genital plastic surgery are labiaplasty, clitoral hood reduction, labia majoraplasty, monsplasty and vaginoplasty.
				</p>
			</div>

		</div>
	);

}

export default VaginalRejuvenation;