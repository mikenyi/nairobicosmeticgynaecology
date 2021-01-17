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
import O_Shot from './components/Services/O_Shot';
import G_Shot from './components/Services/G_Shot';
import P_Shot from './components/Services/P_Shot';
import Background from './components/photos/evan-dvorkin-5nnIufm6ecI-unsplash.jpg';


class App extends React.Component {

  render(){
    return (
      <Router>
        <div className="App">
           <NavigationBar />
          <Switch>
            <Route path="/nairobicosmeticgynecology/contact">
              <DoctorCard />
              <Location />
            </Route>
            <Route path="/nairobicosmeticgynecology/hymenoplasty">
              <Hymenoplasty />
            </Route>
            <Route path="/nairobicosmeticgynecology/labiaplasty">
            
              <Labiaplasty />
            </Route>
            <Route path="/nairobicosmeticgynecology/perinioplasty">
              <Perinioplasty />
            </Route>
            <Route path="/nairobicosmeticgynecology/vaginoplasty">
              <Vaginoplasty />
            </Route>
            <Route path="/nairobicosmeticgynecology/fgm_corrective_surgery">
              <FGMCorrectiveSurgery />
            </Route>
            <Route path="/nairobicosmeticgynecology/clitoral_hood_reduction">
              <ClitoralHoodReduction />
            </Route>
            <Route path="/nairobicosmeticgynecology/o-shot">
              <O_Shot />
            </Route>
            <Route path="/nairobicosmeticgynecology/g-shot">
              <G_Shot />
            </Route>
            <Route path="/nairobicosmeticgynecology/p-shot">
              <P_Shot />
            </Route>
            <Route path="/"> 
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
  }
  
   
}

export default App;
