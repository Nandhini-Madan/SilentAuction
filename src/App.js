import React from "react";
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Registeration from './components/Registeration';
import Login from "./components/Login";
import { AuctionsProvider } from './components/AuctionsContext';
import AuctionGallery from './components/AuctionGallery';
import DisplayAuctionItem from './components/DisplayAuctionItem';
import ModifyAuctionItems from './components/ModifyAuctionItems';

function App() {
  return (
    <AuctionsProvider>
      <div className='container'>
        <Header />
        <Route exact path='/auctions' component={AuctionGallery} />
        <Route path='/auctions/:itemID' component={DisplayAuctionItem} />
        <Route path='/auctions/modify/:itemID' component={ModifyAuctionItems} />

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
