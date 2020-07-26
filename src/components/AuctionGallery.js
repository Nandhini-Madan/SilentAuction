import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // will upgrade to axiosWithAuth
import styled from 'styled-components';

const AuctionGallery = () => {
    const [itemArray, setItemArray] = useState(); // array of auctions/items

    // function to get auction items for gallery display
    const getItems = () => {
        axios
            .get('https://reqres.in/api/users')
            .then(response => {
                // console.log('axios: ', response.data.data);
                setItemArray(response.data.data);
            })
            .catch(error => {
                console.log('axios error: ', error);
            })
    }

    // runs getItems once, when component loads (empty dependency array)
    useEffect(() => {
        getItems();
    }, [])

    // ternary causes items to display if they exist, else displays nothing
    // Link sets path in browser to /item/ and the unique item ID
    return (
        console.log('in return: ', itemArray),
        <Section>
            {(itemArray ?
                itemArray.map(item => (
                    // "to" string literal populates first param. It dynamically
                    // modifies URL, which useParam reads in DisplayAuctionItem.
                    <Link to={`/item/${item.id}`} key={item.id}>
                        <div className='item-container'>
                            <img src={item.avatar} alt={item.email}></img>
                            <p className='title'>{item.email}</p>
                        </div>
                    </Link>
                )) : null
            )}
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
        width: 15rem;
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
        }
    }
`
export default AuctionGallery;