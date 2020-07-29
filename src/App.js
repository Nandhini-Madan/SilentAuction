import React from "react";
import Registeration from './components/Registeration';
import Login from "./components/Login";
import { AuctionsProvider } from './components/AuctionsContext';
import AuctionGallery from './components/AuctionGallery';
import DisplayAuctionItem from './components/DisplayAuctionItem';
import Header from './components/header';
import { Route, Switch } from 'react-router-dom';
import CreateAuction from "./components/CreateAuction";
import AuctionCard from './components/AuctionCard';

function App() {
  return (
    <AuctionsProvider>
      <div className='container'>
        <Header/>
        <Route exact path='/' component={AuctionGallery} />
        {/* <Route path='/item/:itemID' component={DisplayAuctionItem} /> */}
        <Route path='/item/:itemID'>
          <DisplayAuctionItem />
        </Route>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path='/Register'>
	        <Registeration/>
	      </Route>
        <Route path='/createAuction'>
          <CreateAuction />
        </Route>

      </Switch>
    </div>
    </AuctionsProvider>
  );
}

export default App;
