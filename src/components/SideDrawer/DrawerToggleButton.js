import React from 'react';
import './DrawerToggleButton.css';
import { useStateValue } from '../StateProvider';

function DrawerToggleButton(){ 

	const [{ buggerClicked }, dispatch] = useStateValue();

	const ToggleBugger=()=>{
		//Toggle the Menu
		dispatch({
			type: 'ToggleMenu',
			buggerClicked: !buggerClicked,
		})
	}

	let bar1 = "bar1";
	let bar2 = "bar2";
	let bar3 = "bar3";
	if(buggerClicked){
		bar1 = "bar1 change";
		bar2 = "bar2 change";
		bar3 = "bar3 change";
	}
	return(

		<div className="container" onClick={ToggleBugger}>
		  <div className={ bar1 }></div>
		  <div className={ bar2 }></div>
		  <div className={ bar3 }></div>
		</div>

	);
	
	
}
	


export default DrawerToggleButton;