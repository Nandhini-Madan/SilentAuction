import React, { useState, useEffect } from 'react';
import axios from 'axios'; // will upgrade to axiosWithAuth
import styled from 'styled-components';

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
            border-radius: 1rem;
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
            top: 90%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`
const AuctionGallery = () => {
    const [itemArray, setItemArray] = useState(); // array of auctions/items

    // function to get auction items for gallery display
    const getItems = () => {
        axios
            .get('https://reqres.in/api/users')
            .then(response => {
                console.log('axios: ', response.data.data);
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
    return (
        console.log('in return: ', itemArray),
        <Section>
            {(itemArray ?
                itemArray.map(item => (
                    <div className='item-container' key={item.id}>
                        <img src={item.avatar} alt={item.email}></img>
                        <p className='title'>{item.email}</p>
                    </div>
                )) : null)}
        </Section>
    )
};

export default AuctionGallery;