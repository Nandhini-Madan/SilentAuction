import React, { useState, useContext } from "react";
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Registeration from './components/Registeration';
import Login from "./components/Login";
import { AuctionsProvider, AuctionsContext } from './components/AuctionsContext';
import AuctionGallery from './components/AuctionGallery';
import DisplayAuctionItem from './components/DisplayAuctionItem';
import ModifyAuctionItems from './components/ModifyAuctionItems';
import CreateAuction from "./components/CreateAuction";
// import AuctionCard from './components/AuctionCard';



import PrivateRoute from "./components/PrivateRoute"

import Footer from "./components/Footer";

function App() {
 
  //const [itemsArray, , getItems] = useContext(AuctionsContext);

  const [loggedIn, setLoggedIn] = useState(false);

  return (

      <div className='container'>
    <AuctionsProvider>

        <Header />
        <div className='mainbody'>
        <Route exact path='/auctions' component={AuctionGallery} />
        <Route path='/auctions/:itemID' component={DisplayAuctionItem} />
        <PrivateRoute path='/auctions/modify/:itemID' component={ModifyAuctionItems} />
        <Route path='/item/:itemID'>
          <DisplayAuctionItem />
        </Route>
        <Switch>
          <Route path="/login">
            <Login setLoggedIn={setLoggedIn}/>
          </Route>
          <Route path='/Register'>
            <Registeration />
          </Route>
          <PrivateRoute path='/createAuction' component={CreateAuction} />
        </Switch>
        <Footer loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        </div>
    </AuctionsProvider>
      </div>
  );
}

export default App;
