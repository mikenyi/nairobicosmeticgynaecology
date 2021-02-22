import React from 'react';
import './Navigation.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Logo from '../photos/logo.jpg';
import { Link } from 'react-router-dom';

function Navigation(){

	return(
		<header className="navigation__header" >
			<nav className="navigation__nav">
				<div className="navigation__logo">
					<Link to="/nairobicosmeticgynaecology"><img src={ Logo } alt="Nairobi Cosmetics gynaecology Logo" width="56" height="56"/></Link>
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
						      <Link to="/nairobicosmeticgynaecology/hymenoplasty"><p>Hymenoplasty</p></Link>
						      <Link to="/nairobicosmeticgynaecology/labiaplasty"><p>Labiaplasty</p></Link>
						      <Link to="/nairobicosmeticgynaecology/perinioplasty"><p>Perineoplasty</p></Link>
						      <Link to="/nairobicosmeticgynaecology/vaginoplasty"><p>Vaginoplasty</p></Link>
						      <Link to="/nairobicosmeticgynaecology/fgm_corrective_surgery"><p>FGM corrective surgery</p></Link>
						      <Link to="/nairobicosmeticgynaecology/clitoral_hood_reduction"><p>Clitorial Hood Reduction</p></Link>
							  <Link to="/nairobicosmeticgynaecology/o-shot"><p>O-Shot</p></Link>
							  <Link to="/nairobicosmeticgynaecology/g-shot"><p>G-Shot</p></Link>
							  <Link to="/nairobicosmeticgynaecology/p-shot"><p>P-Shot</p></Link>
						    </div>
					    </div> 
					</div>
					<div className="navigation__options">
						<Link to="/nairobicosmeticgynaecology/contact"><span>Contact Us</span></Link>
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