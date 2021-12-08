import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CleanData from './components/pages/CleanData';
import PredictiveAnalysis from './components/pages/PredictiveAnalysis';
import HealthMonitoring from './components/pages/HealthMonitoring';
import UserReport from './components/pages/UserReport';
import Footer from './components/Footer';
import Cards from './components/Cards';


function App() {
  return (
    <>
    
        <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
    
        <Switch>
          <Route path='/cleandata' component={CleanData} />
          <Route path='/predictiveanalysis' component={PredictiveAnalysis} />
          <Route path='/healthmonitoring' component={HealthMonitoring} />
          <Route path='/userreport' component={UserReport} />
        </Switch>
        <Switch>
          <Route path='/cards__container' component={Cards} />
          <Route path='/footer-container' component={Footer} />
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
