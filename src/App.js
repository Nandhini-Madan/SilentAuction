import React from 'react';
import Login from './components/Login';
import Header from './components/header';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className='container'>
      <Header/>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
