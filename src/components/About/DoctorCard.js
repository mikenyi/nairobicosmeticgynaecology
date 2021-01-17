import React from 'react';
import './DoctorCard.css';
import ProfilePic  from "../photos/contact.jpg";


function DoctorCard(){
	return(
		<>
			<div style={{height:"60px", width:"100%", backgroundColor:"transparent"}}>
			</div>
			<div className="card">
				<img src={ ProfilePic } alt="Avatar" width='100%' height="auto" />
				<div className="container">
					<h4><b>Dr. MWAKIRUNGU CROMWELL H M</b></h4> 
					<h5> Specialist</h5> 
					<p>Obstretician/Gynaecologist & Gynae Laparoscopic Surgeon, Aesthetic & Cosmetic Gynaecologist</p>
				</div>
			</div>
		</>
	);
}

export default DoctorCard;
