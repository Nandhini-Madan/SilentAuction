import React from 'react';

import { Link } from 'react-router-dom'; // have to import to link to auction 

function AuctionCard(props) { // this is a card not a list.
    // Added by Paul if this is just a card and not a list, why do you have the map?
    return (
        <div className='auctionContainer'>
        <h3>Open Auctions</h3>
        <div className="auctionList">
            {props.auctions.slice(0).reverse().map((auction, i) => ( // I reversed the array before mapping so that the last action added is the first one shown
                <div key={i} id="card" className='auctionCard'>
                    <Link to={`/auctions/${auction.id}`} key={auction.id}>
                    <div className='sub'>
                        {auction.itemName}
                    </div>
                    </Link>
                    <div className="image">
                       <img src={auction.imageUrl} alt=''/>
                    </div>
                    <div className='sub'>
                        Description:  {auction.description}
                    </div>
                    <div className='sub'>
                        Starting Price: {auction.startingPrice}
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
};

export default AuctionCard;