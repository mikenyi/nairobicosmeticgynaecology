import React from 'react';
import './DoctorCard.css';


function DoctorCard(){
	return(
		<>
		<div style={{height:"60px", width:"100%", backgroundColor:"transparent"}}>
	    </div>
		<div class="card">
		  <img src='img_avatar.png' alt="Avatar" width='100%' height='200px' />
		  <div class="container">
		    <h4><b>Dr. MWAKIRUNGU CROMWELL H M</b></h4> 
		    <h5> Specialist</h5> 
		    <p>Obstretician/Gynaecologist & Gynae Laparoscopic Surgeon, Aesthetic & Cosmetic Gynaecologist</p>
		  </div>
		</div>
		</>
	);
}

export default DoctorCard;
