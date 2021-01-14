import React, { useState } from 'react';
import './Labiaplasty.css';
import ProfileImg from '../photos/pam-sharpe-uJIGWpC3Oao-unsplash.jpg';
import DiagramImg from '../photos/labiaplasty_diagram.jpg';


 
function Labiaplasty () {

	const [showMore, setShowMore] = useState(true)
	const [showFaq, setShowFaq] = useState(true)

	const handleShowMore =() => {
		setShowMore(!showMore)
	}
	const handleShowFaq =()=>{
		setShowFaq(!showFaq)
	}
	return(
		<div className='labiaplasty__main'>
			<h1>Labiaplasty</h1>
			<div className='labiaplasty__firstContainer'>
				<div className='labiaplasty__image'>
					<img src={ ProfileImg } alt="beautiful black woman" />
				</div>
				<div className='labiaplasty__content'>
					<p>
					A labiaplasty is surgery to reduce the size of the labia minora – the flaps of skin either side of the vaginal opening.
					</p>
					
				</div>
			</div>
			<div className='labiaplasty__secondContainer'>
			{showMore?
				<div className="labiaplasty__showMoreContainer">
					<button className="labiaplasty__showMore" onClick={ handleShowMore }>SHOW MORE...  <i className="fa fa-caret-down"></i>
			      	</button>
					<h4>!!!Viewer discretion is advised</h4>
				</div>
				:<div className='labiaplasty__moreInfoContainer' onClick={ handleShowMore }>
					<button className="labiaplasty__showLess" onClick={ handleShowMore }>SHOW LESS...  <i className="fa fa-caret-up"></i>
			      	</button>
					<div className="labiaplasty__image2">
						<img src={ DiagramImg } alt="before&after" height="auto" width="100%"/>
					</div>
					<div className="labiaplasty__content2">
						<p>
						The labia are tissue that surround a woman’s vagina. The labia minora are the inner lips and the labia majora are the outer lips.
						</p>
						<p>
						The unwanted tissue is cut away with a scalpel or laser. The loose edge may be stitched with fine, dissolvable stitches.<br/>
					    The whole procedure takes about 1 to 2 hours.
						</p>
						<p>
						For some women, the labia minora or inner labia can be bothersome. While having labia minora that are longer or have multiple folds is completely normal, some women can feel uncomfortable. Women can have discomfort with intercourse, bicycling, or when they wear tight clothing or bathing suits. Some women do not have any physical complaints, but rather do not like the look of what they consider to be large labia.
						</p>
					</div>
				</div>
			}
			</div>
			<div className="labiaplasty__faq">
			{showFaq?
				<div className="labiaplasty__showFaqContainer">
					<button className='labiaplasty__showFaq' onClick={ handleShowFaq }>SHOW FAQs... <i className="fa fa-caret-down"></i></button>
				</div>
				:<div className="labiaplasty__faqConatianer" onClick={ handleShowFaq } >
					<button className='labiaplasty__hideFaq' onClick={ handleShowFaq }>HIDE FAQs... <i className="fa fa-caret-up"></i></button>
					<h1>FREQUENTLY ASKED QUESTIONS</h1>
					<h3>Q. How long does it take?</h3>
					<p>A. Labiaplasty is a relatively quick procedure that takes about 45 minutes to complete.</p>
					<h3>Q. Will my scars be visible?</h3>
					<p>A. Labiaplasty will not leave external scarring, which is why it is beneficial to have a board-certified plastic surgeon perform this procedure. We ensure that any incisions naturally fold into the creasing of the skin. </p>
					<h3>Q. Will this procedure affect my sensitivity?</h3>
					<p>A. With some surgical procedures, there is some initial numbing in the area where the incisions are made. This will fade over time.</p>
					<h3>Q. Will I need to go under anesthesia for this procedure?</h3>
					<p>A. Labiaplasty can be performed under sedative anesthesia, or it can be done in an exam room under local anesthesia.</p>
					<h3>Q. What is the recovery like?</h3>
					<p>A. Women usually require 4 days recovery time post-procedure and it is recommended to avoid any friction on the pubic region from sports or intimacy for 8-10 weeks post-op. Overall, there is minimal discomfort associated with this procedure and the sutures that are used dissolve on their own.
					</p>
				</div>
			}
			</div>

		</div>
	);

}

export default Labiaplasty;