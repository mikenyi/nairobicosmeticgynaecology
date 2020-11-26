import React from 'react';
import Background from '../photos/evan-dvorkin-5nnIufm6ecI-unsplash.jpg';
import './Home.css';
import AddIcCallRoundedIcon from '@material-ui/icons/AddIcCallRounded';

function Home(){
	return(
		<div className="home__background" style={{backgroundImage: `url(${Background})`,backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundAttachment:"fixed"
		}}>
			<div className="home__spacer">
			</div>
			<div className="home__container">
				<h2 className="home__h4" >BEAUTY WHERE IT MATTERS</h2>
				<h1 className="home__h2" > NAIROBI COSMETICS GYNECOLOGY </h1>
				<a href="https://wa.me/+254727580475?text=I%20want%20to%20book%20an%20appointment"><button className="home__appointment">Book Appointment</button>
				</a>
			</div>
			<div className="home__spacer2">
			</div>
			<div className="home__call">
				<a href="tel:+254727580475"><AddIcCallRoundedIcon fontSize="inherit" color="inherit"/>
				</a>
			</div>
		</div>
	);
}

export default Home