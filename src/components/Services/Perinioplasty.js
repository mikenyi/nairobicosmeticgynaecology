import React, { useState } from 'react';
import './Perinioplasty.css';
import Background from '../photos/evan-dvorkin-5nnIufm6ecI-unsplash.jpg';
import ProfileImg from '../photos/kal-visuals-h3sgSxW5xHE-unsplash22.jpg';
import DiagramImg from '../photos/perineoplast_diagram.jpg';


function Perinioplasty(){

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
		<div className='perineoplasty__main'
		style={{backgroundImage: `url(${Background})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat"
		}}
		>
			<div className="perineoplasty__mainContainer">
				<h1 className="perineoplasty__heading">Perineoplasty</h1>
				<div className='perineoplasty__firstContainer'>
					<div className='perineoplasty__image'>
						<img src={ ProfileImg } alt="beautiful black woman" />
					</div>
					<div className='perineoplasty__content'>
						<p>
						A perineoplasty is a surgical procedure that reshapes and tightens the area between the vaginal opening and the anus.
						</p>
						
					</div>
				</div>
				<div className='perineoplasty__secondContainer'>
				{showLess?
					<div className="perineoplasty__showMoreContainer">
						<button className="perineoplasty__showLess" onClick={ handleShowLess }>SHOW MORE...  <i className="fa fa-caret-down"></i>
						</button>
						<h4>!!!Viewer discretion is advised</h4>
					</div>
					:<div className='perineoplasty__moreInfoContainer' onClick={ handleShowLess }>
						<button className="perineoplasty__showLess" onClick={ handleShowLess }>SHOW LESS...  <i className="fa fa-caret-up"></i>
						</button>
						<div className="perineoplasty__image2">
							<img src={ DiagramImg } alt="before&after" height="auto" width="100%"/>
						</div>
						<div className="perineoplasty__content2">
							<p>
							During childbirth, it is common for women to experience a tearing or purposeful cutting of the perineum which is the area between the vaginal opening and the anus for easier delivery. This tearing of the perineum can cause a widening of the perineum which some women find aesthetically unpleasing. A teared perineum can also cause scarring which can make subsequent deliveries difficult and make vaginal sex uncomfortable. For women who desire a tighter appearance to the perineum for either aesthetic or health reasons, a perineoplasty, also called a perineorrhaphy, can be performed.
							</p>
							<p>
							The procedure may be performed with either a traditional scalpel or with lasers. Typically, incisions will be made in a V-shaped pattern within the vaginal mucosa. Excess skin and any scar tissue is excised. The vaginal levator muscles are tightened. Internal and external closure of the vaginal mucous and perineal muscles are performed to achieve a tighter appearance and function of the perineum. Results are noticeable immediately after the 30-45 minute procedure.
							</p>
							<p>
							The goal of a perineoplasty is to repair tissue in the area from the vaginal opening to the anus, tightening muscle and skin to address vaginal laxity and be more aesthetically pleasing.
							</p>
							<p>
							In some cases, women may experience painful intercourse (known as dyspareunia) due to the vaginal opening being too tight, or because the perineal muscles are too tight. This is known as vaginismus, and can be a result of the involuntary contraction of the muscles of the perineum, making intercourse difficult and uncomfortable. Both issues can be resolved by a perineoplasty procedure in which skin is removed from both the front and back of the vaginal opening, which allows the vaginal muscles to loosen.
							</p>
						</div>
					</div>
				}
				</div>
				<div className="perineoplasty__faq">
				{hideFaq?
					<div className="perineoplasty__hideFaqContainer">
						<button className='perineoplasty__hideFaq' onClick={ handleHideFaq }>SHOW FAQs... <i className="fa fa-caret-down"></i></button>
					</div>
					:<div className="perineoplasty__faqConatianer" onClick={ handleHideFaq } >
						<button className='perineoplasty__hideFaq' onClick={ handleHideFaq }>HIDE FAQs... <i className="fa fa-caret-up"></i></button>
						<h1>FREQUENTLY ASKED QUESTIONS</h1>
						<h3>Q. What different types of perineoplasty are there?</h3>
						<p>A. Depending on the condition to be treated, there are two variations of perineoplasty: one aims to tighten the vagina and perineal muscles, and one to loosen them. Both procedures can also involve the removal of excess skin and scar tissue.</p>
						<h3>Q. What is the difference between vaginoplasty and perineoplasty?</h3>
						<p>A. While both vaginoplasty and perineoplasty are considered cosmetic procedures, vaginoplasty is targeted at the inside of the vagina and aims to tighten the vaginal muscles and reduce the diameter of the vaginal opening. Perineoplasty is designed to target a number of clinical conditions, such as vaginal looseness, itching, incontinence, or decreased sexual sensation, which can result from damage to the perineal muscles. Some women undergo perineoplasty for aesthetic reasons if, for example, they are embarrassed by excess skin or bulging in the perineal area.</p>
						<h3>Q. What types of conditions benefit from perineoplasty?</h3>
						<p>A. Gaping introitus, or an enlarged vaginal opening, is a condition where the vagina feels “open” or “gaping.” This could result in feelings of vaginal laxity and a loss of sensation during sexual intercourse. Gaping introitus is often caused by trauma to the perineum, childbirth, aging, weight gain, weight loss, or congenital conditions that can cause the transverse perineal muscles to stretch, tear, or even separate completely. Some women experience trauma to the perineum as a result of episiotomy: a planned incision to the base of the vaginal opening performed by a surgeon to facilitate childbirth, which may heal incorrectly and require repair. For women with scarring resulting from episiotomy, non-surgical laser procedures can “soften” excess scar tissue and extra skin can be surgically removed.<br/>Dyspareunia is a condition characterised by painful intercourse caused by an overly tight vaginal opening, or by vaginismus, which is the involuntary contraction of the perineal muscles. In these cases, loosening of the perineal muscles is required.</p>
						<h3>Q. What happens during the perineoplasty procedure?</h3>
						<p>A. The procedure involves making a small incision at the base of the vaginal opening and suturing perineal tissue back together in order to tighten and shorten the muscles. In cases where loosening is required, a “triangle” of skin is removed from the base of the vaginal opening. Muscles are also adjusted to widen the vaginal canal</p>
						<h3>Q. How long does perineoplasty take?</h3>
						<p>A. Like vaginoplasty, perineoplasty is a minor surgical procedure that typically takes about an hour to perform.
						</p>
						<h3>Q. What kind of anaesthetic is used during the perineoplasty procedure?
						</h3>
						<p>A. Local or general anaesthetic may be used during the procedure.
						</p>
						<h3>Q. How long is the recovery time following perineoplasty?
						</h3>
						<p>A. Patients can normally return to sedentary work within about a week following the procedure. Sexual activity should be avoided for at least 4-6 weeks, as should tampon use and any strenuous activity. Minor swelling, bruising, and tenderness can be expected for a few days following surgery, as well as mild to moderate pain or discomfort. These can be treated by applying a cold compress to the area, and through prescription pain medication.
						</p>
						<h3>Q. Who is a good candidate for perineoplasty?
						</h3>
						<p>A. Patients who have suffered trauma to the perineum, such as episiotomy, or experienced a loosening of the perineal muscles with age or childbirth are good candidates for perineoplasty. For women who feel that their vaginal entrance has become “open” or “gaping,” or who have excess skin or bulging in the perineal area, perineoplasty could be an effective treatment. Conversely, for patients who suffer from excessive vaginal tightness, such as vaginismus, which causes painful intercourse, perineoplasty can lead to renewed vaginal comfort.
						</p>
					</div>
				}
				</div>
			</div>
			<div className="perineoplasty__spacer" style={{display:`${spacer}`}}></div>
		</div>
	);

}

export default Perinioplasty;