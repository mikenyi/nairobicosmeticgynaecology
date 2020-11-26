import React from 'react';
import './Cosmetic_Surgery_Combination.css';
import ProfileImg from '../photos/justin-essah-YZqNFG9WVYU-unsplash.jpg';

function CosmeticSurgeryCombination(){

	return(
		<div className='combination__main'>
			<h1>Cosmetic Surgery Combination</h1>
			<div className='combination__image'>
				<img src={ ProfileImg } alt="beautiful black woman" />
			</div>
			<div className='combination__content'>
				<h3>Info</h3>
				<p>
				A patient is able to undergo a combination of these surgeries.
				</p>
			</div>

		</div>
	);

}

export default CosmeticSurgeryCombination;