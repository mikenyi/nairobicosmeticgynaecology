import React from 'react';
import './Labiaplasty.css';
import ProfileImg from '../photos/justin-essah-YZqNFG9WVYU-unsplash.jpg';

function Labiaplasty(){

	return(
		<div className='labiaplasty__main'>
			<h1>Labiaplasty</h1>
			<div className='labiaplasty__image'>
				<img src={ ProfileImg } alt="beautiful black woman" />
			</div>
			<div className='labiaplasty__content'>
				<h3>Info</h3>
				<p>
				The term labiaplasty refers to a procedure that reduces the length of the labia minora.
			 	It is the most commonly performed vaginal rejuvenation procedure and it can relieve symptoms women experience from twisting and tugging of the labia.
			  	Women opt for surgery for a variety of reasons, including pain from twisting and tugging of the labia when riding a bike or during intercourse, itching, irritation and self-consciousness.
			  	The goal of the procedure is to reduce the labia minora so that they don't hang below the hair-bearing labia majora.
			    A labiaplasty may be performed to reduce asymmetry when one is longer than the other, or, more commonly, to reduce the length of both labia so that the labia no longer twist, tug or fall out of a bathing suit.
			    Labiaplasty is a procedure that can be done under either local anesthesia with oral sedation or under general anesthesia. The most common type of labiaplasty is the trim procedure, in which the extra tissue is removed and sewn up directly.
			    Next in popularity is the wedge procedure, which maintains a natural border after a pie-shaped piece of tissue has been removed.
			    Extra folds of the clitoral hood can also be reduced at the same time. Closure is usually done with absorbable sutures.
				</p>
			</div>

		</div>
	);

}

export default Labiaplasty;