import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import DoctorCard from './components/About/DoctorCard';
import Location from './components/About/Location3';
import VaginalRejuvenation from './components/Services/Vaginal_Rejuvenation';
import Hymenoplasty from './components/Services/Hymenoplasty';
import Labiaplasty from './components/Services/Labiaplasty';
import Perinioplasty from './components/Services/Perinioplasty';
import Vaginoplasty from './components/Services/Vaginoplasty';
import FGMCorrectiveSurgery from './components/Services/FGM_Corrective_Surgery';
import ClitoralHoodReduction from './components/Services/Clitoral_Hood_Reduction';
import CosmeticSurgeryCombination from './components/Services/Cosmetic_Surgery_Combination';

class App extends React.Component {

  render(){
    return (
      <Router>
        <div className="App">
          
          <Switch>
            
            <Route path="/contact">
              <NavigationBar />
              <DoctorCard />
              <Location />
            </Route>
            <Route path="/vaginal_rejuvenation">
              <NavigationBar />
              <VaginalRejuvenation />
            </Route>
            <Route path="/hymenoplasty">
              <NavigationBar />
              <Hymenoplasty />
            </Route>
            <Route path="/labiaplasty">
              <NavigationBar />
              <Labiaplasty />
            </Route>
            <Route path="/perinioplasty">
              <NavigationBar />
              <Perinioplasty />
            </Route>
            <Route path="/vaginoplasty">
              <NavigationBar />
              <Vaginoplasty />
            </Route>
            <Route path="/fgm_corrective_surgery">
              <NavigationBar />
              <FGMCorrectiveSurgery />
            </Route>
            <Route path="/clitoral_hood_reduction">
              <NavigationBar />
              <ClitoralHoodReduction />
            </Route>
            <Route path="/cosmetic_surgery_combination">
              <NavigationBar />
              <CosmeticSurgeryCombination />
            </Route>
            <Route path="/"> 
              <NavigationBar />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
  }
  
  
}

export default App;
