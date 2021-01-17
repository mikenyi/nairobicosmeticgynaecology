import React, { useState } from 'react';
import './P_Shot.css';
import Background from '../photos/evan-dvorkin-5nnIufm6ecI-unsplash.jpg';
import ProfileImg from '../photos/P_Shot_diagram.jpg';
import DiagramImg from '../photos/P_Shot_diagram_more.jpg';


 
function P_Shot () {

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
		<div className='P-Shot__main'
		style={{backgroundImage: `url(${Background})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat"
		}}
		>
			<div className="P-Shot__mainContainer">
				<h1 className="P-Shot__heading">P-Shot</h1>
				<div className='P-Shot__firstContainer'>
					<div className='P-Shot__image'>
						<img src={ ProfileImg } alt="beautiful black woman" />
					</div>
					<div className='P-Shot__content'>
						<p>
						The P-Shot involves taking platelet-rich plasma (PRP) from your blood and injecting it into your penis to promote tissue growth and purportedly give you better erections.
						</p>
						
					</div>
				</div>
				<div className='P-Shot__secondContainer'>
				{showLess?
					<div className="P-Shot__showMoreContainer">
						<button className="P-Shot__showLess" onClick={ handleShowLess }>SHOW MORE...  <i className="fa fa-caret-down"></i>
						</button>
						<h4>!!!Viewer discretion is advised</h4>
					</div>
					:<div className='P-Shot__moreInfoContainer' onClick={ handleShowLess }>
						<button className="P-Shot__showLess" onClick={ handleShowLess }>SHOW LESS...  <i className="fa fa-caret-up"></i>
						</button>
						<div className="P-Shot__image2">
							<img src={ DiagramImg } alt="before&after" height="auto" width="100%"/>
						</div>
						<div className="P-Shot__content2">
							<p>
							The P-Shot is based on PRP therapy used in recovery from muscle and joint injuries and explored for treating chronic health conditions.
							</p>
							<p>
							In short, the P-Shot has been used as an alternative treatment in cases including:
							<ul>
								<li>
								<strong>Erectile Dysfunction (ED)</strong>
								</li>
								<li>
								<strong>Lichen Sclerosus</strong>
								</li>
								<li>
								<strong>Peyronie's disease</strong>, a condition in which scar tissue makes the penis curve.
								</li>
								<li>
								<strong>Penis Enhancement</strong>
								</li>
								<li>
								General sexual function, performance, and orgasm enhancement
								</li>
							</ul>
							</p>
							<p>
							For some women, the labia minora or inner labia can be bothersome. While having labia minora that are longer or have multiple folds is completely normal, some women can feel uncomfortable. Women can have discomfort with intercourse, bicycling, or when they wear tight clothing or bathing suits. Some women do not have any physical complaints, but rather do not like the look of what they consider to be large labia.
							</p>
						</div>
					</div>
				}
				</div>
				<div className="P-Shot__faq">
				{hideFaq?
					<div className="P-Shot__hideFaqContainer">
						<button className='P-Shot__hideFaq' onClick={ handleHideFaq }>SHOW FAQs... <i className="fa fa-caret-down"></i></button>
					</div>
					:<div className="P-Shot__faqConatianer" onClick={ handleHideFaq } >
						<button className='P-Shot__hideFaq' onClick={ handleHideFaq }>HIDE FAQs... <i className="fa fa-caret-up"></i></button>
						<h1>FREQUENTLY ASKED QUESTIONS</h1>
						<h3>Q. What is the Priapus Shot?</h3>
						<p>A. The Priapus Shot, or P-shot, is a revolutionary procedure in regenerative medicine that uses platelet-rich plasma (PRP) to restore healthy tissue and optimize functioning of the penis. About 60 ml of blood is drawn and processed to extract the PRP. The penis is then anesthetized and then the PRP is injected into various areas. The whole process takes about an hour, but the actual injections take about 5-15 minutes.</p>
						<h3>Q. What kind of results will I see?</h3>
						<p>A. That depends on what you are getting the P-shot for. For Peyronie’s disease, where scar tissue is disrupting the structure of the penis causing painful bent erections, the P-shot helps break up the fibrous scar tissue and replace it with more normal tissue. For erectile dysfunction, the P-shot can help restore normal erections by bringing growth factors and blood flow to the penis. Ultimately, results vary from person to person and are also determined by compliance with daily use of the penis pump.</p>
						<h3>Q. How long will it take to see results?</h3>
						<p>A. Results can take up to 12 weeks to take effect, though they may be quicker with repeated injections.</p>
						<h3>Q. What do I need to do after the procedure?</h3>
						<p>A. Immediately after the injections, the doctor will have you use the penis pump for 10 minutes. You’ll then use the pump for 10 minutes at a time twice per day. Most guys do it first thing in the morning and again before bed, but you may adjust according to your schedule. The pump should be used like this for at least 1 month but ideally 3 months. The idea here is that the pumping is like a workout–you’ll get more reliable results with faithfully using the pump twice per day.</p>
						<h3>Q. Do I need to get the P-shot more than once?</h3>
						<p>A. The P-shot is standalone treatment, however, results are seen with each subsequent treatment. Since your own PRP is used, there is no limit to the number of P-shots you can receive.</p>
						<h3>Q. Is this considered a “penis enlargement” treatment?</h3>
						<p>A. Results vary widely when it comes to gaining length or girth with the P-shot. Some men experience up to 1.3 inches of length and 1.1 inches of girth, but some may not experience any size changes. About 40% of men experience 20% of growth. So, your size experience is based on your initial size prior to treatment. The best chance at obtaining any size changes would be to use the pump as regularly as possible, and consider getting a series of P-Shots.</p>
						<h3>Q. Is the P-Shot painful?</h3>
						<p>A. The P-shot is not without some discomfort, however, we use topical numbing agents before doing any injection to minimize the discomfort.</p>
						<h3>Q. Will the P-Shot or pumping cause any damage to my penis?</h3>
						<p>A. Since your own PRP is used, no damage is caused to the penis during the procedure or from pumping.</p>
						<h3>Q. How soon after the procedure can I get back to sexual activity?</h3>
						<p>A. Within 24-48 hours, you should be ready to resume all normal sexual function.</p>
					</div>
				}
				</div>
			</div>
			<div className="P-Shot__spacer" style={{display:`${spacer}`}}></div>
		</div>
	);

}

export default P_Shot;