import React, { useContext, useState, useEffect } from 'react';
import { AuctionsContext } from './AuctionsContext';
import { useParams, Link } from 'react-router-dom';
// import ModifyAuctionItems from './ModifyAuctionItems';
import styled from 'styled-components';
import axios from 'axios';

import Bid from "../components/Bid";

const DisplayAuctionItem = () => {
    const [itemsArray] = useContext(AuctionsContext);
    const params = useParams();
    const [auctionItem, setAuctionItem] = useState({});
    const [placeBid, setPlaceBid] = useState(false);

    // find item in Context using item ID from params. set to local state.
    useEffect(
        () => {
            setAuctionItem(itemsArray.find(item => item.id === Number(params.itemID)))
        }, [itemsArray, params.itemID]
        
    )

    const deleteItem = event => {
        // event.preventDefault();
        console.log('Delete ID: ', params.itemID);
        axios
            .delete(`https://reqres.in/api/users/${Number(params.itemID)}`, {withCredentials: true})
            .then(response => {
                console.log('Delete Results: ', response);
                // setItemsArray(response.data.data);
            })
            .catch(error => console.log('DELETE Error: ', error));
    }

    const placeYourBid = () =>{
        setPlaceBid(true);
    }

    /*const testBE = event => {
        event.preventDefault();
        console.log('testing back end');
        axios
            .get('https://silent-auction-kb.herokuapp.com/api/items', {withCredentials: true})
            .then(response => {
                console.log('Back End: ', response);
            })
            .catch(error => console.log('Back End Error: ', error));
    }*/

    return (
        <Section>
            {auctionItem && 
                <section className='item-container'>
                    <div className='name'>Auction Item #{params.itemID}</div>
                    <img src={auctionItem.imageUrl} alt={auctionItem.imageUrl}></img>
                    <section className='detail-container'>
                        <div className='details'><b>Description:</b></div>
                        <div>{auctionItem.description}</div>
                        <div className='details'><b>Starting Price:</b> {auctionItem.startingPrice}</div>
                    </section>

                    {localStorage.getItem("token") ? // use a terany operator to only show action options if user is logged in.
                    <div className='button-holder'>
                        <button onClick={placeYourBid}>Place Bid</button>
                        <Link to={`/auctions/modify/${params.itemID}`}><button>Modify Auction</button></Link>
                        <Link to={`/auctions`}><button onClick={deleteItem}>Delete Auction</button></Link>
                        
                        {placeBid /* this terany opperator will show the Bid componet when the button is clicked. */ ? <div> 
                        
                        <Bid auctionId={params.itemID} setPlaceBid={setPlaceBid}/>
                        
                        </div>
                        
                        : ""}
                        
                    </div>
                    : ""}
                    
                    
                    <div>Description: {auctionItem.first_name} {auctionItem.last_name}</div>
                    <div>Starting Price: {auctionItem.email}</div>
                    
                </section>
            }
        </Section>
    )
}

const background1 = '#C99946';
const buttonText2 = '#EDEBE1';
const background2 = '#C05934';
const textshadow = '#C05934';
const background3 = '#A59E69';
const containerBorder = '#34362F';

const Section = styled.section`
    // border: 1px solid red;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-size: 1.75rem;
    color: #EDEBE1;

    .item-container {
        // border: 1px solid orange;
        padding: .5rem;
        width: clamp(25rem, 50%, 50rem);
        diplay: flex;
        flex-direction: column;

        .name {
            font-size: 2.25rem;
            text-align: center;
            color: white;
            margin-bottom: 1rem;
            text-shadow: 2px 2px ${textshadow};
        }

        img {
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            width: 100%;
            border-top: 1px solid ${buttonText2};
            border-right: 1px solid ${buttonText2};
            border-left: 1px solid ${buttonText2};
            border-bottom: 1px solid ${containerBorder};
        }

        .detail-container {
            background: ${background3};
            border-radius: 1rem;
            border: 1px solid ${containerBorder};
            padding: 1rem;
            margin-top: 1rem;
        }

        .details {
            margin-top: 1rem;

            b {
                font-weight: 700;
                color: white;
            }
        }

        .button-holder {
            display: flex;
            justify-content: space-evenly;
            margin-top: 1rem;
            margin-bottom: 3rem;
            background: ${background3};
            border-radius: 1rem;
            border: 1px solid ${containerBorder};
            padding: 1rem;
        }

        button {
            width: 8rem;
            border-radius: 1rem;
            font-size: 1.25rem;
            background: ${background1};
            :hover {
                background: ${background2};
                color: ${buttonText2};
            }
        }

        @media screen and (max-width: 768px) {
            font-size: 1.5rem;
        }
    }
`
export default DisplayAuctionItem;