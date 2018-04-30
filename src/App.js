import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import add_question from './components/add_question';
import create_exam from './components/create_exam'; 
import review from './components/review';

class App extends Component {
  render() {
    return (
      <div className="App">
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
