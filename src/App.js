import React, { Component } from 'react';

import {Switch, Route, Redirect} from 'react-router-dom'

import Header from './components/Header';
import HomePage from './components/HomePage';
import Space from './components/Space';
import FAQ from './components/FAQ';
import Prebuild from './components/Prebuild';
import Schedule from './components/Schedule';
import './App.css';

global.jQuery = require('jquery');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
    };
    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox(event) {
    this.setState({
      lightboxIsOpen: true,
      currentImage: event.currentTarget,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/space" component={Space}/>
              <Route path="/FAQ" component={FAQ}/>
              <Route path="/prebuild" component={Prebuild}/>
              <Route path="/schedule" component={Schedule}/>
              <Redirect to="/" />
            </Switch>
        </div>
      </div>
    );
  }
}


export default App;
