import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import Home from './components/Home';
import ActivityTracker from './components/ActivityTracker'
import TaskView from './components/TaskView'
import MyCarousel from './components/MyCarousel'
import Appbar from './components/Appbar';


function App() {
  return (
    <div className="App">
      <Appbar />
      <Route exact path='/home' component={Home} />
      <Route path='/activityTracker' component={ActivityTracker} />
      <Route exact path='/tasks' component={TaskView} />
      <Route exact path="/carousel" component={MyCarousel} />
    </div>
  );
}

export default App;
