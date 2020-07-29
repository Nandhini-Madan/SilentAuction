import React, { useContext, useState, useEffect } from 'react';
import { AuctionsContext } from './AuctionsContext';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ModifyAuctionItems = () => {
    const [itemsArray] = useContext(AuctionsContext);
    const [auctionItem, setAuctionItem] = useState({});
    const params = useParams();

    // find item in Context using item ID from params. set to local state.
    useEffect(
        () => {
            setAuctionItem(itemsArray.find(item => item.id === Number(params.itemID)))
        }, [itemsArray, params.itemID]
    )

    return(
        <Section>
            {auctionItem && 
                <section className='item-container'>
                    <div className='name'>Modify Auction Item #{params.itemID}</div>
                    <img src={auctionItem.avatar} alt={auctionItem.email}></img>
                    <section className='detail-container'>
                        <div className='details'><b>Description:</b></div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        <div className='details'><b>Starting Price:</b> {auctionItem.email}</div>
                    </section>
                </section>
            }
        </Section>
    )
}

const buttonText2 = '#EDEBE1';
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

        @media screen and (max-width: 768px) {
            font-size: 1.5rem;
        }
    }
`
export default ModifyAuctionItems;