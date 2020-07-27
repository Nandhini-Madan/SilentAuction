import React from 'react';
import AuctionGallery from './components/AuctionGallery';
import DisplayAuctionItem from './components/DisplayAuctionItem';
import { AuctionsProvider } from './components/AuctionsContext';
import Login from './components/Login';
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
      </Switch>
      </div>
    </AuctionsProvider>
  )
}

export default App;
