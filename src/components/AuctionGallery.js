import React,  {useContext , useEffect } from 'react';
import { AuctionsContext } from './AuctionsContext';
//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuctionCard from './AuctionCard';



const AuctionGallery = () => {
    // replaced useState with useContext and AuctionsContext
    const [itemsArray , getItems] = useContext(AuctionsContext);

    useEffect(() => {
        getItems();
    }, [getItems])
    
    // ternary causes items to display if they exist, else displays nothing
    // Link sets path in browser to /item/ and the unique item ID
    return (
        // console.log('in return: ', itemsArray),
        <Section>
            {/*{(itemsArray ?
                itemsArray.map((item, i) => (
                    // "to" string literal populates first param. It dynamically
                    // modifies URL, which useParam reads in DisplayAuctionItem.
                    <Link to={`/auctions/${item.id}`} key={i}>
                        <div className='item-container'>
                            <img src={item.imageUrl} alt={item.itemName}></img>
                            <p className='title'>{item.itemName}</p>
                            
                        </div>
                    </Link>
                )) : null
                ) }*/}

                {/*AuctionGallery(this component) was built to create a "list" of auction cards. The AcutionCard component below should not have had a map fuction.
                AuctionCard should not create a list of its own, it was already done. It should have been given each item from the map above to render in its own card.
                 This section is the parent. Vish had the 52 cards in the deck ... he needs to be able to deal one card at a time*/}
                <AuctionCard auctions={itemsArray} /> {/* in this case our AuctionCard wants the whole list of "cards/deck" */}
            
        </Section>
        
        
    )
};

const Section = styled.section`
    // border: 1px solid red;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;

    .item-container {
        // border: 1px solid orange;
        margin: .5rem;
        width: 25rem;
        diplay: flex;
        flex-direction: column;
        position: relative;
        text-align: center;

        img {
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            width: 100%;
            opacity: .6;
            cursor: pointer;
            :hover {
                opacity: 1;
            }
        }

        .title {
            width: 100%;
            color: white;
            background: rgba(0,0,0,0.65);
            position: absolute;
            top: 75%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: 'Montserrat', Arial, Helvetica, sans-serif;
            font-size: 1.25rem;
        }
    }
`
export default AuctionGallery;