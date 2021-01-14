import React from 'react';
import './Location3.css';
import LocationImg from '../photos/fifth_Avenue.jpg';


function Location(){
	return(
		<div class="location__container">
			<a href="https://www.google.com/maps/search/?api=1&query=-1.295367,36.807787">
			<h1>FIND US</h1>
			<img src={ LocationImg } alt="location" width="80%"/>
			</a>
			<div class="location__spacer">
			</div>
		</div>

	);
}

export default Location;