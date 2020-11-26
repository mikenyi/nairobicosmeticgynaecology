import React from "react";
import Navigation from '../NavigationBar/Navigation';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import { useStateValue } from '../StateProvider';

function NavigationBar(){

	const [{ buggerClicked }, dispatch] = useStateValue();

	let backdrop;
    if(buggerClicked){
      backdrop = <Backdrop /> ;
    }
    return (
      <div style={{height: "100%"}}>
        <Navigation />
        <SideDrawer  />
        {backdrop}
        <div style={{height:"0px", width:"100%", backgroundColor:"transparent"}}>
        </div>
      </div>
    );
}

export default NavigationBar;