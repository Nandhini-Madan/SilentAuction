import React, {useState, useEffect} from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import '../css/index.css';
import { useHistory } from "react-router-dom";


const Bid = (props) => {

    let history = useHistory();
    const [bid, setBid] = useState({
        item_id: 0,
        user_id: 0,
        value: 0,
        created_at: ""
    });

    const handleSubmit = (event) => {

        event.preventDefault();

        bid.item_id = props.auctionId;
        
        bid.created_at = Math.floor(Date.now() / 1000);
        //axiosWithAuth().post(`items/${bid.item_id}/bids`, bid, {credentials: 'include'})
        axiosWithAuth().fetch(`items/${bid.item_id}/bids`, bid, {credentials: 'include'})
        .then(res => {
          console.log(res);
          
          history.push(`/auctions/${bid.item_id}`);
          
        })
        .catch(err => {
            console.log("invalid login.", err);
        })

        props.setPlaceBid(false);

    };

    const inputChange = (e) => {
        e.persist();
        //validate(e);
        let value = e.target.value;
        value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setBid({ ...bid, [e.target.name]: value });


    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="amountBid"></label>
            <input
                id="amountBid"
                name="amountBid"
                type="text"
                placeholder="Your bid"
                //value={formData.name}
                onChange={inputChange}
            />

            <div className="buttonContainer" onClick={handleSubmit}><div className="bid">Place Bid</div></div>

        </form>
    );
}

export default Bid;
