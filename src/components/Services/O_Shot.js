import React, { useState } from 'react';
import './O_Shot.css';
import ProfileImg from '../photos/O_Shot_diagram.jpg';
import DiagramImg from '../photos/O_Shot_diagram_more.jpg.webp';
import { Link } from 'react-router-dom';


 
function O_Shot () {

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
		<div className='O-Shot__main'>
			<div className="O-Shot__mainContainer">
				<h1 className="O-Shot__heading"> O-Shot</h1>
				<div className='O-Shot__firstContainer'>
					<div className='O-Shot__image'>
						<img src={ ProfileImg } alt="beautiful black woman" />
					</div>
					<div className='O-Shot__content'>
						<p>
						Platelet rich plasma, or PRP, can be injected around the clitoris and within the vaginal walls to increase sensitivity and sexual pleasure in a procedure called the O-Shot. PRP is rich in growth platelets which helps to stimulate blood flow and cell growth where injected.
						</p>
					</div>
				</div>
				<div className='O-Shot__secondContainer'>
				{showLess?
					<div className="O-Shot__showMoreContainer">
						<button className="O-Shot__showLess" onClick={ handleShowLess }>SHOW MORE...  <i className="fa fa-caret-down"></i>
						</button>
						<h4>!!!Viewer discretion is advised</h4>
					</div>
					:<div className='O-Shot__moreInfoContainer' onClick={ handleShowLess }>
						<button className="O-Shot__showLess" onClick={ handleShowLess }>SHOW LESS...  <i className="fa fa-caret-up"></i>
						</button>
						<div className="O-Shot__image2">
							<img src={ DiagramImg } alt="before&after" height="auto" width="100%"/>
						</div>
						<div className="O-Shot__content2">
							<p>
							Before treatment, blood will be drawn from the patient’s arm and placed within a centrifuge to separate the platelet rich plasma from the red blood cells.
							</p>
							<p>
							Once prepared, the PRP will be injected around various erogenous zones such as the clitoris and inner vaginal walls. Once the injection is complete, the patient will be able to resume all normal activity, including sexual intercourse.
							</p>
							<p>
							There may be a feeling of fullness within the vagina which should gradually resolve over the course of 1-3 days.
							</p>
							<p>
							The goal of the O-Shot is to stimulate growth of new tissue and blood flow around the clitoris and vaginal walls to increase sensitivity.
							</p>
						</div>
					</div>
				}
				</div>
				<div className="O-Shot__faq">
				{hideFaq?
					<div className="O-Shot__hideFaqContainer">
						<button className='O-Shot__hideFaq' onClick={ handleHideFaq }>SHOW FAQs... <i className="fa fa-caret-down"></i></button>
					</div>
					:<div className="O-Shot__faqConatianer" onClick={ handleHideFaq } >
						<button className='O-Shot__hideFaq' onClick={ handleHideFaq }>HIDE FAQs... <i className="fa fa-caret-up"></i></button>
						<h1>FREQUENTLY ASKED QUESTIONS</h1>
						<h3>Q. What Should I Expect During My O-Shot Procedure Appointment?</h3>
						<p>A. Dr. Mwakirungu will review your medical history. You will have an opportunity to ask questions should you have any. A topical numbing cream is applied to the injection area (s). Your blood is then drawn and prepared. Once your PRP is ready, the doctor will inject into the desired area.You will then be instructed on how to use the APEX device for the best regenerative results. The entire visit will last approximately 30 minutes.</p>
						<h3>Q. What Is The Clinical Protocol?</h3>
						<p>A. After the O-Shot procedure, you are asked to use the APEX pelvic bowl exerciser device to stimulate and strengthen the pelvic floor muscles. Please use the device daily for a minimum of 10 minutes for 2 weeks. The more you use the device the better. You may continue daily or weekly use indefinitely for continued benefit.</p>
						<h3>Q. Does The O-Shot Treat Urinary Incontinence?</h3>
						<p>A. Many women report significant improvement of stress and urge incontinence. There are many reports of total resolution of the problem. Strengthening the pelvic floor musculature in conjunction with PRP can significantly impact urinary incontinence. StudioPRP Providers recommend using the APEX medical device in combination with PRP for the best outcome.</p>
						<h3>Q. Does The O-Shot Procedure Hurt?</h3>
						<p>A. Most women are quite comfortable during the procedure. The discomfort is often described as a mild pinch or mild sting, lasting only a few minutes. The numbing feeling may last 30-60 minutes after the procedure.</p>
						<h3>Q. Are There Any Side Effects Or Downtime With The O-Shot?</h3>
						<p>A. There are typically no side effects or downtime. There may be a few drops of blood from the injection site. You can return to work, exercise and any other activity the same day (including sexual activity).</p>
						<h3>Q. Do I Need To Come Back For A Follow Up Visit After The Procedure?</h3>
						<p>A. Generally a brief phone conversation or office visit (15 minutes) at 4 weeks is recommended. A plan for further care will be considered at that time.</p>
						<h3>Q. Will I Need A 2nd O-Shot?</h3>
						<p>A. Some women choose to have a 2nd O-shot for various reasons. You may have a 2nd O-shot after 4 weeks should you desire.</p>
						<h3>Q. How Many O-Shots May I Have?</h3>
						<p>A. There is no limit to the number of O-shots a woman can have safely. Evaluation by a physician skilled in the use of PRP is necessary to determine potential risk and benefit.</p>
						<h3>Q. Is The O-Shot Covered By Insurance?</h3>
						<p>A. Currently this procedure is not covered by insurance including Medicare.</p>
						<h3>Q. Can I Have The O-Shot Done If I Am Pregnant?</h3>
						<p>A. NO -Women who are pregnant or lactating should not have the O-Shot procedure. If you are not sure – a pregnancy test will need to be done prior. You will be asked to sign a document to verify that you are not pregnant or lactating at time of the procedure.</p>
						<h3>Q. Can I Have The O-Shot If I Am Menstruating?</h3>
						<p>A. Yes, you can have the procedure done during menstruation. Anytime of the month in a woman’s cycle is acceptable.</p>
						<h3>Q. Are There Any Guarantees With The O-Shot Procedure?</h3>
						<p>A. This is an elective procedure and there are no guarantees that you will achieve the desired results. It may take more than one procedure to reach your desired goals.</p>
					</div>
				}
				</div>
				<Link to="/nairobicosmeticgynecology/g-shot"><i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
				<Link to="/nairobicosmeticgynecology/clitoral_hood_reduction"><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
			</div>
			<div className="O-Shot__spacer" style={{display:`${spacer}`}}></div>
		</div>
	);

}

export default O_Shot;