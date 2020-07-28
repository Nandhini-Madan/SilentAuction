import React from "react";
import Registeration from './components/Registeration';
import Login from "./components/Login";
import { AuctionsProvider } from './components/AuctionsContext';
import AuctionGallery from './components/AuctionGallery';
import DisplayAuctionItem from './components/DisplayAuctionItem';
import Header from './components/header';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <AuctionsProvider>
      <div className='container'>
        <Route exact path='/' component={AuctionGallery} />
        {/* <Route path='/item/:itemID' component={DisplayAuctionItem} /> */}
        <Route path='/item/:itemID'>
          <DisplayAuctionItem />
        </Route>
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
    </AuctionsProvider>
  );
}

export default App;
