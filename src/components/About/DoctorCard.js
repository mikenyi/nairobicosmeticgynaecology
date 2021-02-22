import React from 'react';
import './DoctorCard.css';
import ProfilePic  from "../photos/contact.jpg";


function DoctorCard(){
	return(
		<>
			<h2 className="doctorcard__header">The Specialist/Gynaecologist</h2>
			<div className="card">
				<img src={ ProfilePic } alt="Avatar" width='100%' height="auto" />
				<div className="card__container">
					<h4><b>Dr. MWAKIRUNGU CROMWELL H M</b></h4> 
					<h5> Specialist</h5> 
					<p>Obstretician/Gynaecologist & Gynae Laparoscopic Surgeon, Aesthetic & Cosmetic Gynaecologist</p>
				</div>
			</div>
		</>
	);
}

export default DoctorCard;
