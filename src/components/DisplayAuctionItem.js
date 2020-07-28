import React, { useContext, useState, useEffect } from 'react';
import { AuctionsContext } from './AuctionsContext';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const DisplayAuctionItem = () => {
    const [itemsArray] = useContext(AuctionsContext);
    const params = useParams();
    const [auctionItem, setAuctionItem] = useState({});

    // find item in Context using item ID from params. set to local state.
    useEffect(
        () => {
            setAuctionItem(itemsArray.find(item => item.id === Number(params.itemID)))
        }, [itemsArray, params.itemID]
    )

    return (
        <Section>
            {auctionItem && 
                <section className='item-container'>
                    <div className='name'>Auction Item #{params.itemID}</div>
                    <img src={auctionItem.avatar} alt={auctionItem.email}></img>
                    <section className='detail-container'>
                        <div className='details'><b>Description:</b></div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        <div className='details'><b>Starting Price:</b> {auctionItem.email}</div>
                    </section>
                    <div className='button-holder'>
                        <Link to={`/auctions`}><button>Modify Auction</button></Link>
                        <Link to={`/auctions`}><button>Delete Auction</button></Link>
                        <Link to={`/auctions`}><button>Auction List</button></Link>
                    </div>
                </section>
            }
        </Section>
    )
}

const background1 = '#C99946';
const buttonText2 = '#EDEBE1';
const background2 = '#C05934';
const textshadow = '#C05934';
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
        }

        .detail-container {
            background: #A59E69;
            border-radius: 1rem;
            border: 1px solid #34362F;
            padding: 1rem;
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
        }

        button {
            width: 12rem;
            margin-top: 1rem;
            border-radius: 1rem;
            font-size: 1.25rem;
            background: ${background1};
            :hover {
                background: ${background2};
                color: ${buttonText2};
            }
        }
    }
`
export default DisplayAuctionItem;