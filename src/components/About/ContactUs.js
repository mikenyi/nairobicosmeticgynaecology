import React from 'react';
import './ContactUs.css';
import DoctorCard from './DoctorCard';
import Location from './Location3';


function ContactUs(){
	return(
		<div className="contactus__mainContainer">
            <div className="contactus__container">
                <div className="contactUs__header">
                    <h2>Visit Us at our offices</h2>
                    <h3>3rd Floor Suite 18</h3>
                    <h3>5th Avenue Offices & Suites</h3>
                    <h3>Nairobi, Kenya</h3>
                </div>
                <Location />
                <DoctorCard />
            </div>
		</div>
	);
}

export default ContactUs;
    