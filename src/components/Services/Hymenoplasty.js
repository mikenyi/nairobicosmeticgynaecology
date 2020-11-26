import React from 'react';
import './Hymenoplasty.css';
import ProfileImg from '../photos/justin-essah-YZqNFG9WVYU-unsplash.jpg';

function Hymenoplasty(){

	return(
		<div className='hymenoplasty__main'>
			<h1>Hymenoplasty</h1>
			<div className='hymenoplasty__image'>
				<img src={ ProfileImg } alt="beautiful black woman" />
			</div>
			<div className='hymenoplasty__content'>
				<h3>Info</h3>
				<p>
				A hymenoplasty is a surgical procedure that restores the hymen,
				a membrane that partially covers the opening of the vagina. A hymenoplasty procedure is typically done for religious or cultural purposes as an intact hymen is considered a sign of virginity for some.
				The hymen is a membrane that partially covers the vaginal opening. 
				The shape and appearance of the hymen will vary between women but is typically a half moon shape at the bottom of the vaginal opening.
				A hymen can be broken or torn at different times during a woman’s life, 
				whether caused by tampon insertion, exercise, or sexual intercourse. 
				Minor bleeding is commonly associated with the breaking of the hymen. In some cultures and religions,
				an intact hymen is associated with a woman’s virginity. A hymenoplasty, sometimes referred to as hymenorrhaphy or hymen construction surgery, 
				is usually performed for cultural or religious reasons prior to marriage. Others seek the surgery as a form of therapy after sexual assault.
				No matter the reason for having the hymen restored, the surgery can be completed in less than an hour under local anesthesia with immediately visible results. 
				During surgery, the patient will only require a local anesthesia but may be given a sedative for comfort throughout the procedure.
				The hymen will be identified and partially excised to eliminate uneven tissue from previous tearing.
				The hymen will be sutured together in two layers using dissolvable stitches.
			 	For some women, a small piece of tissue from another part of the vagina may need to be grafted to the vaginal opening to recreate the hymen. The goal of a hymenoplasty is to restore the appearance of the hymen.
				</p>
			</div>

		</div>
	);

}

export default Hymenoplasty;