import React from 'react';
import './Navigation.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { Link } from 'react-router-dom';

function Navigation(){

	return(
		<header className="navigation__header" >
			<nav className="navigation__nav">
				<div className="navigation__logo">
					<Link to="/nairobicosmeticgynecology"><h1>THE LOGO</h1></Link>
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
						      <Link to="/nairobicosmeticgynecology/hymenoplasty"><p>Hymenoplasty</p></Link>
						      <Link to="/nairobicosmeticgynecology/labiaplasty"><p>Labiaplasty</p></Link>
						      <Link to="/nairobicosmeticgynecology/perinioplasty"><p>Perinioplasty</p></Link>
						      <Link to="/nairobicosmeticgynecology/vaginoplasty"><p>Vaginoplasty</p></Link>
						      <Link to="/nairobicosmeticgynecology/fgm_corrective_surgery"><p>FGM corrective surgery</p></Link>
						      <Link to="/nairobicosmeticgynecology/clitoral_hood_reduction"><p>Clitorial Hood Reduction</p></Link>
							  <Link to="/nairobicosmeticgynecology/o-shot"><p>O-Shot</p></Link>
							  <Link to="/nairobicosmeticgynecology/g-shot"><p>G-Shot</p></Link>
							  <Link to="/nairobicosmeticgynecology/p-shot"><p>P-Shot</p></Link>
						    </div>
					    </div> 
					</div>
					<div className="navigation__options">
						<Link to="/nairobicosmeticgynecology/contact"><span>Contacts</span></Link>
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