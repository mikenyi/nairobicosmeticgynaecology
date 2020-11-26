import React from 'react';
import './FGM_Corrective_Surgery.css';
import ProfileImg from '../photos/justin-essah-YZqNFG9WVYU-unsplash.jpg';

function FGMCorrectiveSurgery(){

	return(
		<div className='fgm__main'>
			<h1>FGM Corrective Surgery</h1>
			<div className='fgm__image'>
				<img src={ ProfileImg } alt="beautiful black woman" />
			</div>
			<div className='fgm__content'>
				<h3>Info</h3>
				<p>
				The World Health Organization (WHO) defines Female Genital Mutilation (FGM) as, "any procedure that intentionally alters or causes injury to female genital organs for non-medical reasons and with no health benefits." 
				An estimated 200 million women have been subjected to FGM around the world, usually between the first week of life and adolescence, and often by their caregivers. 
				It is a cultural ritual in parts of Africa, the Middle East, and Asia to encourage female sexual fidelity. 
				It is internationally recognized as a violation of human rights. 
				However, with time, with the help of urologists, OB Gynecologists and Plastic surgeons, there have been tremendous breakthroughs available for millions of women who have undergone Genital Mutilation. 
				Reconstructive surgery involves breaking open the scar formed by FGM, and pulling the clitoris, the majority of which lies beneath the surface, back to the surface, relieving the pain associated with FGM and restoring sensitivity.
				</p>
			</div>

		</div>
	);

}

export default FGMCorrectiveSurgery;