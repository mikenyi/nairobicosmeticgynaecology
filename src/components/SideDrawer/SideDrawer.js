import React from 'react'; 
import './SideDrawer.css';
import { Link } from "react-router-dom";
import { useStateValue } from '../StateProvider';

function SideDrawer (){

	const [{ buggerClicked }, dispatch] = useStateValue();

	let drawerClasses = "side-drawer";

	if(buggerClicked){
		drawerClasses = "side-drawer open";
	}
	return(
		<nav className={drawerClasses}>
			<div className="sidenav">
			  <div className="navbar__logo">
				<Link to="/"><h1>THE LOGO</h1></Link>
			  </div>
			  <div className='navbar__options'>
			  	<Link to="/home">Home</Link>
			  </div>
			  <div className="dropdown">
		  
			      <button className="dropdown-btn">Services  <i className="fa fa-caret-down"></i>
			      </button>
			      <div className="dropdown-content">
			        <Link to="/vaginal_rejuvenation">Vaginal Rejuvenation</Link>
			        <Link to="/hymenoplasty">Hymenoplasty</Link>
			        <Link to="/labiaplasty">Labiaplasty</Link>
			        <Link to="/perinioplasty">Perinioplasty</Link>
			        <Link to="/vaginoplasty">Vaginoplasty</Link>
			        <Link to="/fgm_corrective_surgery">FGM corrective surgery</Link>
			        <Link to="/clitoral_hood_reduction">Clitorial Hood Reduction</Link>
			        <Link to="/cosmetic_surgery_combination"> A combination of any of the above</Link>
			      </div>
			</div>
			  <div className="navbar__options">
			  	<Link to="/contact" >Contact</Link>
			  </div>
			</div>		
		</nav>
	);
};

export default SideDrawer;
