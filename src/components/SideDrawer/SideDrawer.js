import React from 'react'; 
import './SideDrawer.css';
import { Link } from "react-router-dom";
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
				<Link to="/nairobicosmeticgynecology" onClick={ ToggleBugger }><h1>THE LOGO</h1></Link>
			  </div>
			  <div className='navbar__options'>
			  	<Link to="/nairobicosmeticgynecology/home" onClick={ ToggleBugger }>Home</Link>
			  </div>
			  <div className="dropdown">
		  
			      <button className="dropdown-btn">Services<i className="fa fa-caret-down"></i>
			      </button>
			      <div className="dropdown-content">
			        <Link to="/nairobicosmeticgynecology/hymenoplasty" onClick={ ToggleBugger }>Hymenoplasty</Link>
			        <Link to="/nairobicosmeticgynecology/labiaplasty" onClick={ ToggleBugger }>Labiaplasty</Link>
			        <Link to="/nairobicosmeticgynecology/perinioplasty" onClick={ ToggleBugger }>Perinioplasty</Link>
			        <Link to="/nairobicosmeticgynecology/vaginoplasty" onClick={ ToggleBugger }>Vaginoplasty</Link>
			        <Link to="/nairobicosmeticgynecology/fgm_corrective_surgery" onClick={ ToggleBugger }>FGM corrective surgery</Link>
			        <Link to="/nairobicosmeticgynecology/clitoral_hood_reduction" onClick={ ToggleBugger }>Clitorial Hood Reduction</Link>
					<Link to="/nairobicosmeticgynecology/o-shot" onClick={ ToggleBugger }>O-Shot</Link>
			        <Link to="/nairobicosmeticgynecology/g-shot" onClick={ ToggleBugger }>G-Shot</Link>
			        <Link to="/nairobicosmeticgynecology/p-shot" onClick={ ToggleBugger }>P-Shot</Link>
			      </div>
			</div>
			  <div className="navbar__options">
			  	<Link to="/nairobicosmeticgynecology/contact" onClick={ ToggleBugger }>Contacts</Link>
			  </div>
			</div>		
		</nav>
	);
};

export default SideDrawer;
