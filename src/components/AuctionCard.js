import React from 'react';

function AuctionCard(props) {
    return (
        <div className='auctionContainer'>
        <h3>Open Auctions</h3>
        <div className="auctionList">
            {props.auctions.map((auction, i) => (
                <div key={i} id="card" className='auctionCard'>
                    <div className='sub'>
                        {auction.itemName}
                    </div>
                    <div>
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