import React from 'react';
import './Clitoral_Hood_Reduction.css';
import ProfileImg from '../photos/justin-essah-YZqNFG9WVYU-unsplash.jpg';

function ClitoralHoodReduction(){

	return(
		<div className='clitoral__main'>
			<h1>Clitoral Hood Reduction</h1>
			<div className='clitoral__image'>
				<img src={ ProfileImg } alt="beautiful black woman" />
			</div>
			<div className='clitoral__content'>
				<h3>Info</h3>
				<p>
				The clitoris usually sits underneath a layer of skin known as the hood or prepuce. The clitoral hood protects the sensitive nerve endings found in the clitoris, however, sometimes the clitoral hood can be too large or too long. This can result in discomfort, decreased sexual enjoyment and an unbalanced appearance.
				</p>
				<p>
				Clitoral hood reduction surgery is a procedure that eliminates the excess tissue surrounding the clitoris, improving the appearance of the female genitalia and making the hood less prominent. The clitoral hood is not completely removed but reduced in size, so there is no risk of damage to the clitoral nerves.
				</p>
			</div>

		</div>
	);

}

export default ClitoralHoodReduction;