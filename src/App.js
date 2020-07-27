import React from "react";
import {Link,Route,Switch} from 'react-router-dom';
import Registeration from './components/Registeration';

function App() {
  return (
    <div>
      <Route path='/Registeration'>
        <Registeration/>
      </Route>
    </div>
  );
}

export default App;
