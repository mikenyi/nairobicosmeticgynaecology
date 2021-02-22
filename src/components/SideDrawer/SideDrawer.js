import React from 'react'; 
import './SideDrawer.css';
import { Link } from "react-router-dom";
import Logo from '../photos/logo.jpg';
import { useStateValue } from '../StateProvider';

function SideDrawer (){

	const [{ buggerClicked }, dispatch] = useStateValue();

	const ToggleBugger=()=>{
		//Toggle the Menu
		dispatch({
			type: 'ToggleMenu',
			buggerClicked: !buggerClicked,
		})
	}

	let drawerClasses = "side-drawer";

	if(buggerClicked){
		drawerClasses = "side-drawer open";
	}
	return(
		<nav className={drawerClasses}>
			<div className="sidenav">
			  <div className="navbar__logo">
				<Link to="/nairobicosmeticgynaecology" onClick={ ToggleBugger }><img src={ Logo } alt="Nairobi Cosmetics gynaecology Logo" width="200" height="200"/></Link>
			  </div>
			  <div className='navbar__options'>
			  	<Link to="/nairobicosmeticgynaecology/home" onClick={ ToggleBugger }>Home</Link>
			  </div>
			  <div className="dropdown">
		  
			      <button className="dropdown-btn">Services<i className="fa fa-caret-down"></i>
			      </button>
			      <div className="dropdown-content">
			        <Link to="/nairobicosmeticgynaecology/hymenoplasty" onClick={ ToggleBugger }>Hymenoplasty</Link>
			        <Link to="/nairobicosmeticgynaecology/labiaplasty" onClick={ ToggleBugger }>Labiaplasty</Link>
			        <Link to="/nairobicosmeticgynaecology/perinioplasty" onClick={ ToggleBugger }>Perineoplasty</Link>
			        <Link to="/nairobicosmeticgynaecology/vaginoplasty" onClick={ ToggleBugger }>Vaginoplasty</Link>
			        <Link to="/nairobicosmeticgynaecology/fgm_corrective_surgery" onClick={ ToggleBugger }>FGM corrective surgery</Link>
			        <Link to="/nairobicosmeticgynaecology/clitoral_hood_reduction" onClick={ ToggleBugger }>Clitorial Hood Reduction</Link>
					<Link to="/nairobicosmeticgynaecology/o-shot" onClick={ ToggleBugger }>O-Shot</Link>
			        <Link to="/nairobicosmeticgynaecology/g-shot" onClick={ ToggleBugger }>G-Shot</Link>
			        <Link to="/nairobicosmeticgynaecology/p-shot" onClick={ ToggleBugger }>P-Shot</Link>
			      </div>
			</div>
			  <div className="navbar__options">
			  	<Link to="/nairobicosmeticgynaecology/contact" onClick={ ToggleBugger }>Contact Us</Link>
			  </div>
			</div>		
		</nav>
	);
};

export default SideDrawer;
