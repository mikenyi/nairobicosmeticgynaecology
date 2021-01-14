import React, { useState } from 'react';
import './Hymenoplasty.css';
import ProfileImg from '../photos/justin-essah-YZqNFG9WVYU-unsplash.jpg';
import DiagramImg from '../photos/hymenoplasty_diagram.jpg';

function Hymenoplasty(){

	const [showMore, setShowMore] = useState(true)
	const [showFaq, setShowFaq] = useState(true)

	const handleShowMore =() => {
		setShowMore(!showMore)
	}
	const handleShowFaq =()=>{
		setShowFaq(!showFaq)
	}
	return(
		<div className='hymenoplasty__main'>
			<h1>Hymenoplasty</h1>
			<div className='hymenoplasty__firstContainer'>
				<div className='hymenoplasty__image'>
					<img src={ ProfileImg } alt="beautiful black woman" />
				</div>
				<div className='hymenoplasty__content'>
					<p>
					A hymenoplasty is a surgical procedure that restores the hymen, a membrane that partially covers the opening of the vagina.
					</p>	
				</div>
			</div>
			<div className='hymenoplasty__secondContainer'>
			{showMore?
				<div className="hymenoplasty__showMoreContainer">
					<button className="hymenoplasty__showMore" onClick={ handleShowMore }>SHOW MORE...  <i className="fa fa-caret-down"></i>
			      	</button>
					<h4>!!!Viewer discretion is advised</h4>
				</div>
				:<div className='hymenoplasty__moreInfoContainer' onClick={ handleShowMore }>
					<button className="hymenoplasty__showLess" onClick={ handleShowMore }>SHOW LESS...  <i className="fa fa-caret-up"></i>
			      	</button>
					<div className="hymenoplasty__image2">
						<img src={ DiagramImg } alt="before&after" height="auto" width="100%"/>
					</div>
					<div className="hymenoplasty__content2">
						<p>
						The hymen is a membrane that partially covers the vaginal opening.A hymen can be broken or torn at different times during a woman’s life, whether caused by tampon insertion, exercise, or sexual intercourse. Minor bleeding is commonly associated with the breaking of the hymen. In some cultures and religions, an intact hymen is associated with a woman’s virginity.
						</p>
						<p>
						A hymenoplasty, sometimes referred to as hymenorrhaphy or hymen construction surgery, is usually performed for cultural or religious reasons prior to marriage. Others seek the surgery as a form of therapy after sexual assault. 
						</p>
						<p>
						During surgery, the patient will only require a local anesthesia but may be given a sedative for comfort throughout the procedure. The patient will lay comfortably on a table with the pegs spread apart. The hymen will be identified and partially excised to eliminate uneven tissue from previous tearing. The hymen will be sutured together in two layers using dissolvable stitches. For some women, a small piece of tissue from another part of the vagina may need to be grafted to the vaginal opening to recreate the hymen.
						</p>
						<p>
						The goal of a hymenoplasty is to restore the appearance of the hymen.
						</p>
					</div>
					
				</div>
			}
			</div>
			<div className="hymenoplasty__faq">
			{showFaq?
				<div className="hymenoplasty__showFaqContainer">
					<button className='hymenoplasty__showFaq' onClick={ handleShowFaq }>SHOW FAQs... <i className="fa fa-caret-down"></i></button>
				</div>
				:<div className="hymenoplasty__faqConatianer" onClick={ handleShowFaq } >
					<button className='hymenoplasty__hideFaq' onClick={ handleShowFaq }>HIDE FAQs... <i className="fa fa-caret-up"></i></button>
					<h1>FREQUENTLY ASKED QUESTIONS</h1>
					<h3>Q. How long does the procedure take and how much does it cost?</h3>
					<p>A. The procedure takes about 1.5 hours and costs about ..We will be happy to find the optimum financing option for you together with our partner..
					</p>
					<h3>Q. Will I experience any pain?</h3>
					<p>A. No, the procedure is usually not painful.
				    </p>
					<h3>Q. In which phase of the menstrual cycle should the procedure be scheduled?</h3>
					<p>A. The phase of the menstrual cycle is irrelevant for the surgery. However, you should refrain from using tampons after the surgery, as the new hymen would otherwise be destroyed again.</p>
					<h3>Q. When can I start showering again?</h3>
					<p>A. You can shower again on the second postoperative day. However, you should only use clear, lukewarm water for about 5 days. Taking a bath is only permitted after two weeks. However, taking a sitz bath with chamomile after 3 days is permitted and even beneficial.
					</p>
					<h3>Q. Where is the hymen located?</h3>
					<p>A. The hymen is a piece of vaginal mucosa (membrane) that is locate across the lower section of your vagina. It is tightly stretched and allows blood to freely pass through.
					</p>
					<h3>Q. How can a hymen become teared?</h3>
					<p>A. The hymen may tear during intense physical activities such as sports, horseback riding, or bicycling. Tampon use can also result in a tear of the hymen. Bleeding or pain may occur when a hymen has been torn.</p>
					<h3>Q. How is the hymen restored?</h3>
					<p>A. The hymen is actually reconstructed using advanced surgical procedures.</p>
					<h3>Q.What does hymenoplasty involve?</h3>
					<p>A. A hymenoplasty procedure alters the positioning of the hymenal ring and tissues so they are closer together. Following the removal of the torn sections, the remaining edges of the hymen are stitched together. Over time, the newly formed hymenal ring will fuse together.The new hymen will eventually take the shape of the original one prior to tearing.
					</p>
					<h3>Q. What are the complications?</h3>
					<p>A. Complications associated with Hymenoplasty are rare. In some cases, patients may experience lower sensation around the surgical site, or bleeding and infection.</p>
					<h3>
					Q. What is the length of the recovery period? 
					</h3>
					<p>
					A. Recovery following a hymenoplasty procedure will generally take two weeks. During this period, pain may be experienced when engaging in sexual intercourse. It is recommended to wait at least 3 months for the surgical site to fully heal before attempting sexual intercourse.
					</p>
					<h3>
					Q. What is experienced after hymen repair surgery?
					</h3>
					<p>
					A. The procedure is performed on a gynecology table, under sterile conditions.<br/>The patient can return to her normal life1 hour after the procedure that takes about 30 minutes.
						<br/>She should avoid heavy sports activities and sudden leg movements.
					</p>
					<h3>
					Q. How is permanent hymen repair performed?
					</h3>
					<p>
					A. Hymen sugery is known as ‘hymenoplasty operation’. The aim is to allow bleeding like imitating the first night. Permanent hymen operation is also known as ‘long term repair’ or ‘permanent repair’ .Permanent hymen repair is performed in two ways:<br/>
						• Flap operation<br/>
						• Microsurgery method<br/>
					</p>
				</div>
			}
			</div>

		</div>
	);

}

export default Hymenoplasty;