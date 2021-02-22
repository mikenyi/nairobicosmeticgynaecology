import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import ContactUs from './components/About/ContactUs';
import Hymenoplasty from './components/Services/Hymenoplasty';
import Labiaplasty from './components/Services/Labiaplasty';
import Perinioplasty from './components/Services/Perinioplasty';
import Vaginoplasty from './components/Services/Vaginoplasty';
import FGMCorrectiveSurgery from './components/Services/FGM_Corrective_Surgery';
import ClitoralHoodReduction from './components/Services/Clitoral_Hood_Reduction';
import O_Shot from './components/Services/O_Shot';
import G_Shot from './components/Services/G_Shot';
import P_Shot from './components/Services/P_Shot';

class App extends React.Component {

  render(){
    return (
      <Router>
        <div className="App">
           <NavigationBar />
          <Switch>
            <Route path="/nairobicosmeticgynaecology/contact">
              <ContactUs />
            </Route>
            <Route path="/nairobicosmeticgynaecology/hymenoplasty">
              <Hymenoplasty />
            </Route>
            <Route path="/nairobicosmeticgynaecology/labiaplasty">
            
              <Labiaplasty />
            </Route>
            <Route path="/nairobicosmeticgynaecology/perinioplasty">
              <Perinioplasty />
            </Route>
            <Route path="/nairobicosmeticgynaecology/vaginoplasty">
              <Vaginoplasty />
            </Route>
            <Route path="/nairobicosmeticgynaecology/fgm_corrective_surgery">
              <FGMCorrectiveSurgery />
            </Route>
            <Route path="/nairobicosmeticgynaecology/clitoral_hood_reduction">
              <ClitoralHoodReduction />
            </Route>
            <Route path="/nairobicosmeticgynaecology/o-shot">
              <O_Shot />
            </Route>
            <Route path="/nairobicosmeticgynaecology/g-shot">
              <G_Shot />
            </Route>
            <Route path="/nairobicosmeticgynaecology/p-shot">
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
