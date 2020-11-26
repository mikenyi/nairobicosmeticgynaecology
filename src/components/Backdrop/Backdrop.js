import React from 'react';
import './Backdrop.css';
import { useStateValue } from '../StateProvider';

const Backdrop = (props) =>{

	const [{ buggerClicked }, dispatch] = useStateValue();

	const backdropClickHandler =()=>{
		//Toggle the Menu
		dispatch({
			type: 'ToggleMenu',
			buggerClicked: !buggerClicked,
		})

	}
	return(
		<div className="backdrop" onClick={backdropClickHandler}>
		</div>
	);
}

	
	


export default Backdrop;