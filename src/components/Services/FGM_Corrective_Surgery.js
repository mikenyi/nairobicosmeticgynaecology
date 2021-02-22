import React, { useState } from 'react';
import './FGM_Corrective_Surgery.css';
import ProfileImg from '../photos/pam-sharpe-uJIGWpC3Oao-unsplash2.jpg';
import DiagramImg from '../photos/fgm_diagram_illustrative.jpg';
import { Link } from 'react-router-dom';


function FGMCorrectiveSurgery(){

	const [showLess, setShowLess] = useState(true)
	const [hideFaq, setHideFaq] = useState(true)
	const [spacer, setSpacer] = useState("block")


	const handleShowLess =() => {
		setShowLess(!showLess)
		if(showLess){
			return setSpacer("none")
		}else{
			return setSpacer("block")
		}
	}
	const handleHideFaq =()=>{
		setHideFaq(!hideFaq)
		if(hideFaq){
			return setSpacer("none")
		}else{
			return setSpacer("block")
		}
	}
	return(
		<div className='fgm__main'>
			<div className="fgm__mainContainer">
				<h1 className="fgm__heading">FGM Reconstruction</h1>
				<div className='fgm__firstContainer'>
					<div className='fgm__image'>
						<img src={ ProfileImg } alt="beautiful black woman"  />
					</div>
					<div className='fgm__content'>
						<p>
						Female genital mutilation or cutting (FGM/C) reconstructive surgery is a reconstructive procedure that may increase sexual function and appearance of the female genital on patients who have been injured by FGM/C.
						</p>	
					</div>
				</div>
				<div className='fgm__secondContainer'>
				{showLess?
					<div className="fgm__showMoreContainer">
						<button className="fgm__showMore" onClick={ handleShowLess }>SHOW MORE...  <i className="fa fa-caret-down"></i>
						</button>
						<h4>!!!Viewer discretion is advised</h4>
					</div>
					:<div className='fgm__moreInfoContainer' onClick={ handleShowLess }>
						<button className="fgm__showMore" onClick={ handleShowLess }>SHOW LESS...  <i className="fa fa-caret-up"></i>
						</button>
						<div className="fgm__image2">
							<img src={ DiagramImg } alt="before&after" height="auto" width="100%"/>
						</div>
						<div className="fgm__content2">
							<p>
							Female genital mutilation or cutting (FGM/C) is the practice of totally or partially removing the female genitalia or causing other injury to the female genitals, without medical indication.
							</p>
							<p>
							Often misleadingly described as female circumcision, FGM/C is most commonly performed on young babies, girls and women for a variety of culturally ingrained reasons that pre-date modern religion and span several continents. The motivations for such practices are often cited as tradition; a passing into womanhood; a preservation of virginity, chastity, and family honor; and a protection against sexual assault. In some cases, women consent, but in most others, it is imposed upon them without consent.
							</p>
							<p>
							FGM/C reconstruction consists of recovering the remaining clitoris and placing it externally as close to the vagina as possible. Firstly, the scar tissue is removed from the skin to expose the clitoris. When the residual clitoris is recognized, the clitoris is dissected from bulbocavernosus muscles to obtain lateral mobility and the suspensory ligament is sectioned.
							</p>
							<p>
							The goal of reconstruction is entirely based on discussion between the patient and the physician. Many times, a patient’s goal is to help the anatomy look and feel more “normal” and for the individual to “feel more whole.”
							</p>
						</div>
					</div>
				}
				</div>
				<div className="fgm__faq">
				{hideFaq?
					<div className="fgm__hideFaqContainer">
						<button className='fgm__hideFaq' onClick={ handleHideFaq }>SHOW FAQs... <i className="fa fa-caret-down"></i></button>
					</div>
					:<div className="fgm__faqConatianer" onClick={ handleHideFaq } >
						<button className='fgm__hideFaq' onClick={ handleHideFaq }>HIDE FAQs... <i className="fa fa-caret-up"></i></button>
						<h1>FREQUENTLY ASKED QUESTIONS</h1>
						<h3>Q. How long does it take to recover?</h3>
						<p>A. Patients are discharged one day after the surgery and check-up visits are scheduled two weeks, a month and a half, and three months after surgery. During the first month the patient is taught to perform daily care of the wound.Sexual intercourse is allowed three months after surgery and a final evaluation is made at six months.
						</p>
					</div>
				}
				</div>
				<Link to="/nairobicosmeticgynecology/clitoral_hood_reduction"><i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
				<Link to="/nairobicosmeticgynecology/vaginoplasty"><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
			</div>
			<div className="fgm__spacer" style={{display:`${spacer}`}}></div>
		</div>
	);

}

export default FGMCorrectiveSurgery;