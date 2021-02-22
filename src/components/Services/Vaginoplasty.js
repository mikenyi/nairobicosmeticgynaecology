import React, { useState } from 'react';
import './Vaginoplasty.css';
import ProfileImg from '../photos/justin-essah-YZqNFG9WVYU-unsplash22.jpg';
import DiagramImg from '../photos/vaginoplasty_diagram.jpg';
import { Link } from 'react-router-dom';


function Vaginoplasty(){

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
		<div className='vaginoplasty__main'>
			<div className="vaginoplasty__mainContainer">
				<h1 className="vaginoplasty__heading">Vaginoplasty</h1>
				<div className='vaginoplasty__firstContainer'>
					<div className='vaginoplasty__image'>
						<img src={ ProfileImg } alt="beautiful black woman" />
					</div>
					<div className='vaginoplasty__content'>
						<p>
						Vaginoplasty is a procedure that aims to "tighten up" a vagina that's become slack or loose from vaginal childbirth or aging. Some surgeons claim it can even improve sensitivity.
						</p>
						
					</div>
				</div>
				<div className='vaginoplasty__secondContainer'>
				{showLess?
					<div className="vaginoplasty__showMoreContainer">
						<button className="vaginoplasty__showMore" onClick={ handleShowLess }>SHOW MORE...  <i className="fa fa-caret-down"></i>
						</button>
						<h4>!!!Viewer discretion is advised</h4>
					</div>
					:<div className='vaginoplasty__moreInfoContainer' onClick={ handleShowLess }>
						<button className="vaginoplasty__showLess" onClick={ handleShowLess }>SHOW LESS...  <i className="fa fa-caret-up"></i>
						</button>
						<div className="vaginoplasty__image2">
							<img src={ DiagramImg } alt="before&after" height="auto" width="100%"/>
						</div>
						<div className="vaginoplasty__content2">
							<p>
							After childbirth, women may complain of vaginal laxity, resulting from stretching of tissues and separating of muscles, sometimes to the point that a tampon falls out, and this lack of tone can contribute to sexual dysfunction.
							</p>
							<p>
							Once the amount of tightening to be done is determined, a pie-shape wedge is marked to delineate the extra skin to be removed from inside the vagina. Beneath the skin, the tissues are tightened with strong sutures. Once the vaginal canal has been tightened, the mucosal skin is sutured closed. If there is external skin that protrudes, this can be reduced as well for a more aesthetic result.
							</p>
							<p>
							A vaginoplasty brings the separated muscles together, and the extra mucosa skin from the back side of the vagina is removed. The external skin can also be removed for a more aesthetic appearance.
							</p>
							<p>
							This procedure typically results in a tighter vaginal canal, which can help enhance sexual satisfaction.
							</p>
						</div>
					</div>
				}
				</div>
				<div className="vaginoplasty__faq">
				{hideFaq?
					<div className="vaginoplasty__hideFaqContainer">
						<button className='vaginoplasty__hideFaq' onClick={ handleHideFaq }>SHOW FAQs... <i className="fa fa-caret-down"></i></button>
					</div>
					:<div className="vaginoplasty__faqConatianer" onClick={ handleHideFaq } >
						<button className='vaginoplasty__hideFaq' onClick={ handleHideFaq }>HIDE FAQs... <i className="fa fa-caret-up"></i></button>
						<h1>FREQUENTLY ASKED QUESTIONS</h1>
						<h3>Q. How long does it take?</h3>
						<p>A. vaginoplasty is a relatively quick procedure that takes about 45 minutes to complete.</p>
						<h3>Q. Will my scars be visible?</h3>
						<p>A. vaginoplasty will not leave external scarring, which is why it is beneficial to have a board-certified plastic surgeon perform this procedure. We ensure that any incisions naturally fold into the creasing of the skin. </p>
						<h3>Q. Will this procedure affect my sensitivity?</h3>
						<p>A. With some surgical procedures, there is some initial numbing in the area where the incisions are made. This will fade over time.</p>
						<h3>Q. Will I need to go under anesthesia for this procedure?</h3>
						<p>A. vaginoplasty can be performed under sedative anesthesia, or it can be done in an exam room under local anesthesia.</p>
						<h3>Q. What is the recovery like?</h3>
						<p>A. Women usually require 4 days recovery time post-procedure and it is recommended to avoid any friction on the pubic region from sports or intimacy for 8-10 weeks post-op. Overall, there is minimal discomfort associated with this procedure and the sutures that are used dissolve on their own.
						</p>
					</div>
				}
				</div>
				<Link to="/nairobicosmeticgynecology/fgm_corrective_surgery"><i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
				<Link to="/nairobicosmeticgynecology/perinioplasty"><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
			</div>
			<div className="vaginoplasty__spacer" style={{display:`${spacer}`}}></div>
		</div>
	);
}

export default Vaginoplasty;