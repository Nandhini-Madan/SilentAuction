import React from "react";
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Registeration from './components/Registeration';
import Login from "./components/Login";
import { AuctionsProvider } from './components/AuctionsContext';
import AuctionGallery from './components/AuctionGallery';
import DisplayAuctionItem from './components/DisplayAuctionItem';

function App() {
  return (
    <AuctionsProvider>
      <div className='container'>
        <Header />
        <Route exact path='/' component={AuctionGallery} />
        <Route path='/item/:itemID' component={DisplayAuctionItem} />

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
