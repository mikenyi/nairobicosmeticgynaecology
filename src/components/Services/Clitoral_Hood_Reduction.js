import React, { useState } from 'react';
import './Clitoral_Hood_Reduction.css';
import ProfileImg from '../photos/kal-visuals-h3sgSxW5xHE-unsplash2.jpg';
import DiagramImg from '../photos/clitoralhood_diagram.jpg';
import { Link } from 'react-router-dom';


function ClitoralHoodReduction(){

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
		<div className='clitoral__main'>
			<div className="clitoral__mainContainer">
				
				<h1 className="clitoral__heading">Clitoral Hood Reduction</h1>
				<div className='clitoral__firstContainer'>
					<div className='clitoral__image'>
						<img src={ ProfileImg } alt="beautiful black woman" />
					</div>
					<div className='clitoral__content'>
						<p>
						clitoral hood reduction surgery is a cosmetic gynecological procedure to reduce the amount of skin that covers the clitoris.
						When this excess tissue is removed, it's easier for women to get sexually aroused and eventually reach fulfillment.
						</p>
						
					</div>
				</div>
				<div className='clitoral__secondContainer'>
				{showLess?
					<div className="clitoral__showMoreContainer">
						<button className="clitoral__showLess" onClick={ handleShowLess }>SHOW MORE...  <i className="fa fa-caret-down"></i>
						</button>
						<h4>!!!Viewer discretion is advised</h4>
					</div>
					:<div className='clitoral__moreInfoContainer' onClick={ handleShowLess }>
						<button className="clitoral__showLess" onClick={ handleShowLess }>SHOW LESS...  <i className="fa fa-caret-up"></i>
						</button>
						<div className="clitoral__image2">
							<img src={ DiagramImg } alt="before&after" height="auto" width="100%"/>
						</div>
						<div className="clitoral__content2">
							<p>
							That flap is your clitoral hood, a fold of skin that surrounds and protects your glans clitoris. It’s basically the female equivalent of the male foreskin. And just like labia, clitoral hoods come in all shapes, sizes, and colors.
							</p>
							<p>
							Clitoral hoodoplasty, clitoral hoodectomy or clitoral hood reduction surgery as it's commonly referred to, is a cosmetic gynaecological procedure to reduce the amount of skin that covers the clitoris. When this excess tissue is removed, it's easier for women to get sexually aroused and eventually reach fulfillment. However, a clitoral hood reduction doesn't simply serve as a vaginal rejuvenation procedure to improve the quality of the orgasm. 
							</p>
							<p>
							There is a second major benefit that prompts women to opt for surgery! Women with a large clitoral hood will often feel uncomfortable in snug fabrics. Apart from the discomfort, there also might be some measure of pain as the clitoral hood is inclined to rub against the thighs. 
							</p>
							<p>
							A third benefit exists! Clitoral hoodoplasty also undertakes to enhance the visual appeal of the clitoral hood. A larger hood might be visible through one's clothing and, as a result, could cause its owner to be embarrassed. 
							</p>
							<p>
							During the procedure, patients will only require a local anesthetic but may be given an oral sedative for increased comfort.
							The incisions will vary from patient to patient depending on the goals of the surgery. If the patient’s anatomy only requires a greater exposure of the clitoris with no skin excision, an incision will be made to in the center of the clitoral hood, extending the length of the prepuce and lateral folds of the vagina.
							Other patients may only require skin excision to reveal a hidden clitoris. Dissolvable sutures will be used during the procedure. Most patients are able to resume normal activity within a few days and penetrative sex within 1 month.
							</p>
							<p>
							The goal of a clitoral hood reduction is to eliminate the excess folds of the clitoral hood or prepuce.
							</p>
						</div>
					</div>
				}
				</div>
				<div className="clitoral__faq">
				{hideFaq?
					<div className="clitoral__hideFaqContainer">
						<button className='clitoral__hideFaq' onClick={ handleHideFaq }>SHOW FAQs... <i className="fa fa-caret-down"></i></button>
					</div>
					:<div className="clitoral__faqConatianer" onClick={ handleHideFaq } >
						<button className='clitoral__hideFaq' onClick={ handleHideFaq }>HIDE FAQs... <i className="fa fa-caret-up"></i></button>
						<h1>FREQUENTLY ASKED QUESTIONS</h1>
						<h3>Q. What does a clitoral hood reduction do?</h3>
						<p>A. The extra folds can create a bulge that is exaggerated when the labia minora are reduced, and a clitoral hood reduction can improve the balance in appearance of the female genitalia.</p>
						<h3>Q. Anesthesia for a clitoral hood reduction</h3>
						<p>A. A clitoral hood reduction is usually done at the time of a labiaplasty under either local anesthesia with oral sedation or under general anesthesia.</p>
						<h3>Q. Clitoral hood reduction procedure</h3>
						<p>A. The excess tissue is marked according to the individual's anatomy. There is a wide variation in the shape and extent of folds. In some patients the excision is performed as a "Y" extension off the labiaplasty. Closure is usually done with absorbable sutures.</p>
						<h3>Q. What are the risks of a clitoral hood reduction?</h3>
						<p>A. There is a risk of bleeding, hematoma, infection, under-resection or over-resection.</p>
						<h3>Q. Recovering from a clitoral hood reduction</h3>
						<p>A. The recovery is primarily determined by the accompanying labiaplasty.
						</p>
						<h3>
						What are the results of a clitoral hood reduction?
						</h3>
						<p>
						In some patients with a heavy clitoral hood, a labiaplasty without a clitoral hood reduction can result in a top-heavy look. A clitoral hood reduction can lend balance to a labiaplasty in such patients. Clitoral hood reduction is generally performed with labiaplasty, which has a high satisfaction rate of over 90 percent.
						</p>
					</div>
				}
				</div>
				<Link to="/nairobicosmeticgynecology/o-shot"><i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
				<Link to="/nairobicosmeticgynecology/fgm_corrective_surgery"><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
			</div>
			
			<div className="clitoral__spacer" style={{display:`${spacer}`}}></div>
			
		</div>
	);
}

export default ClitoralHoodReduction;