import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import AddQuestion from './components/add_question';
import CreateExam from './components/create_exam'; 
import Review from './components/review';
import TopBar from './components/top_bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Switch>
          <Route exact path='/add_question' component={AddQuestion}/>
          <Route exact path='/create_exam' component={CreateExam}/>
          <Route exact path='/review' component={Review}/>
          <Route path='/' render={() => (<Redirect to="/review"/>)}/>
        </Switch>
      </div>
    );
  }
}

export default App;
