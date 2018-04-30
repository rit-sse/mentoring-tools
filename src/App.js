import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import add_question from './components/add_question';
import create_exam from './components/create_exam'; 
import review from './components/review';
import TopBar from './components/TopBar';

class App extends Component {
  render() {
    return (
      <link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css"/>
      <script
        src="https://code.jquery.com/jquery-3.1.1.min.js"
        integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
        crossorigin="anonymous"></script>
      <script src="semantic/dist/semantic.min.js"></script>
      <div className="App">
        <TopBar />
        <Switch>
          <Route exact path='/add_question' component={add_question}/>
          <Route exact path='/create_exam' component={create_exam}/>
          <Route exact path='/review' component={review}/>
          <Route path='/' render={() => (<Redirect to="/add_question"/>)}/>
        </Switch>
      </div>
    );
  }
}

export default App;
