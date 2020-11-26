import React from 'react';
import './Navigation.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { Link } from 'react-router-dom';

function Navigation(){

	return(
		<header className="navigation__header">
			<nav className="navigation__nav">
				<div className="navigation__logo">
					<Link to="/"><h1>THE LOGO</h1></Link>
				</div>
				<div className="navigation__spacer">
				</div>
				<div className="navigation__items">
					<div className="navigation__options">
						<Link to="/"><span>Home</span></Link>
					</div>
					<div className="navigation__options">
						<div className="dropdown">
						    <button className="dropbtn">Services  <i class="fa fa-caret-down"></i>
						    </button>
						    <div className="dropdown-container">
						      <Link to="/vaginal_rejuvenation"><p>Vaginal Rejuvenation</p></Link>
						      <Link to="/hymenoplasty"><p>Hymenoplasty</p></Link>
						      <Link to="/labiaplasty"><p>Labiaplasty</p></Link>
						      <Link to="/perinioplasty"><p>Perinioplasty</p></Link>
						      <Link to="/vaginoplasty"><p>Vaginoplasty</p></Link>
						      <Link to="/fgm_corrective_surgery"><p>FGM corrective surgery</p></Link>
						      <Link to="/clitoral_hood_reduction"><p>Clitorial Hood Reduction</p></Link>
						      <Link to="/cosmetic_surgery_combination"><p> A combination of any of the above</p></Link>
						    </div>
					    </div> 
					</div>
					<div className="navigation__options">
						<Link to="/contact"><span>Contacts</span></Link>
					</div>
				</div>
				<div className="navigation__burger">
					<DrawerToggleButton />
				</div>

			</nav>
		</header>
	);
	
}

export default Navigation;