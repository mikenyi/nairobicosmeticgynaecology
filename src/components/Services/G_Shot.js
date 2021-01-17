import React, { useState } from 'react';
import './G_Shot.css';
import Background from '../photos/evan-dvorkin-5nnIufm6ecI-unsplash.jpg';
import ProfileImg from '../photos/G_Shot_diagram.jpg';
import DiagramImg from '../photos/G_Shot_diagram_more.jpg';


 
function G_Shot () {

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
		<div className='G-Shot__main'
		style={{backgroundImage: `url(${Background})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat"
		}}
		>
			<div className="G-Shot__mainContainer" >
				<h1 className="G-Shot__heading">G-Shot</h1>
				<div className='G-Shot__firstContainer'>
					<div className='G-Shot__image'>
						<img src={ ProfileImg } alt="beautiful black woman" />
					</div>
					<div className='G-Shot__content'>
						<p>
						The G-spot is a sensitive area of the anterior vaginal wall that some women enjoy having stimulated during sexual activity. Injecting hyaluronic acid within the G-spot is intended to increase the sensitivity of the area, making it easier to achieve an orgasm.
						</p>
						
					</div>
				</div>
				<div className='G-Shot__secondContainer'>
				{showLess?
					<div className="G-Shot__showMoreContainer">
						<button className="G-Shot__showMore" onClick={ handleShowLess }>SHOW MORE...  <i className="fa fa-caret-down"></i>
						</button>
						<h4>!!!Viewer discretion is advised</h4>
					</div>
					:<div className='G-Shot__moreInfoContainer' onClick={ handleShowLess }>
						<button className="G-Shot__showLess" onClick={ handleShowLess }>SHOW LESS...  <i className="fa fa-caret-up"></i>
						</button>
						<div className="G-Shot__image2">
							<img src={ DiagramImg } alt="before&after" height="auto" width="100%"/>
						</div>
						<div className="G-Shot__content2">
							<p>
							During treatment, the woman will lay on a table with legs in stirrups, similar to when receiving a Pap smear. The doctor, typically a gynecologist, will do a pelvic exam to determine the location of the G-spot with the patient’s assistance.
							</p>
							<p>
							A special speculum will be inserted into the vagina to inject a local anesthetic to the vaginal wall. Based on the pelvic exam, the hyaluronic acid will then be injected into the location of the G-spot. The typical products used for G-Shot include Restylane, Perlane, and Juvederm.
							</p>
							<p>
							A tampon may be worn after the procedure to prevent any spot bleeding from the needle injections. Normal sexual activity can be resumed 4 hours after treatment.
							</p>
							<p>
							The goal of the G-Shot is to stimulate the tissue around the "g-spot" and vaginal walls to increase sensitivity, improving sexual arousal and gratification.
							</p>
						</div>
					</div>
				}
				</div>
				<div className="G-Shot__faq">
				{hideFaq?
					<div className="G-Shot__hideFaqContainer">
						<button className='G-Shot__hideFaq' onClick={ handleHideFaq }>SHOW FAQs... <i className="fa fa-caret-down"></i></button>
					</div>
					:<div className="G-Shot__faqConatianer" onClick={ handleHideFaq } >
						<button className='G-Shot__showFaq' onClick={ handleHideFaq }>HIDE FAQs... <i className="fa fa-caret-up"></i></button>
						<h1>FREQUENTLY ASKED QUESTIONS</h1>
						<h3>Q. What is G-Shot?</h3>
						<p>A. The G-Shot™ or G-Spot Amplification™ is a simple, non-surgical, physician administered treatment that can temporarily enhance and enlarge the G-Spot in sexually active women with normal sexual function. It is a safe, drug-free, painless office procedure performed under local anesthesia.</p>
						<h3>Q. Is the G-Shot Safe?</h3>
						<p>A. The G-Shot is safe, and the risks are rare.</p>
						<h3>Q. Can I continue to use tampons with the G-Shot?</h3>
						<p>A. There is no problem with using tampons after the G-Shot.</p>
						<h3>Q. Can the G-Shot product move out of place?</h3>
						<p>A. After placement the G-Shot remains in its original position.</p>
						<h3>Q. How does the G-Shot program help me find my G-Spot?</h3>
						<p>A. In the consultative portion of the program, the physician will provide the information and assist you with the knowledge to locate your G-Spot.</p>
						<h3>Q. How long is the duration of the procedure?</h3>
						<p>A. The actual injection usually takes seconds and the total time in the examination room is usually than 20-30 minutes.</p>
						<h3>Q. What are the results of the G-Shot?</h3>
						<p>A. A specially designed speculum is used to assist in the delivery of a dermal filler directly behind the G-Spot. The G-Shot augments (enlarges) the G-Spot. This results in a G-Spot about the size of a quarter in width, and one fourth of an inch in height (meaning the projection into the vagina).</p>
						<h3>Q. How long is the recovery time?</h3>
						<p>A. There’s no recovery time needed. You’re ready to get on with your day! Within 4 hours you can resume normal sexual activity. The effects can last up to 4 months, however, results may vary.</p>
						<h3>Q. What are the side effects of this procedure?</h3>
						<p>A. The most common side effect following injection includes scant bleeding from the needle injection site.</p>
						<h3>Q. Who is a candidate for this procedure?</h3>
						<p>A. The G-Shot is for normal sexually functioning women. It is not for women who have sexual dysfunctions (problems with the female sexual response cycle: arousal, plateau, orgasm, resolution); relationship problems or emotional/psychological problems. </p>
					</div>
				}
				</div>
			</div>
			<div className="G-Shot__spacer" style={{display:`${spacer}`}}></div>
		</div>
	);

}

export default G_Shot;