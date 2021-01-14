import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import DoctorCard from './components/About/DoctorCard';
import Location from './components/About/Location3';
import Hymenoplasty from './components/Services/Hymenoplasty';
import Labiaplasty from './components/Services/Labiaplasty';
import Perinioplasty from './components/Services/Perinioplasty';
import Vaginoplasty from './components/Services/Vaginoplasty';
import FGMCorrectiveSurgery from './components/Services/FGM_Corrective_Surgery';
import ClitoralHoodReduction from './components/Services/Clitoral_Hood_Reduction';


class App extends React.Component {

  render(){
    return (
      <Router>
        <div className="App">
          
          <Switch>
            
            <Route path="/nairobicosmeticgynecology/contact">
              <NavigationBar />
              <DoctorCard />
              <Location />
            </Route>
            <Route path="/nairobicosmeticgynecology/hymenoplasty">
              <NavigationBar />
              <Hymenoplasty />
            </Route>
            <Route path="/nairobicosmeticgynecology/labiaplasty">
              <NavigationBar />
              <Labiaplasty />
            </Route>
            <Route path="/nairobicosmeticgynecology/perinioplasty">
              <NavigationBar />
              <Perinioplasty />
            </Route>
            <Route path="/nairobicosmeticgynecology/vaginoplasty">
              <NavigationBar />
              <Vaginoplasty />
            </Route>
            <Route path="/nairobicosmeticgynecology/fgm_corrective_surgery">
              <NavigationBar />
              <FGMCorrectiveSurgery />
            </Route>
            <Route path="/nairobicosmeticgynecology/clitoral_hood_reduction">
              <NavigationBar />
              <ClitoralHoodReduction />
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
