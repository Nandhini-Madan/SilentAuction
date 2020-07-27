import React from "react";
import {Link,Route,Switch} from 'react-router-dom';
import Registeration from './components/Registeration';
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div className='container'>
      <Header/>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path='/Register'>
	        <Registeration/>
	      </Route>

      </Switch>
    </div>
  );
}

export default App;
