import React, {useState, useEffect} from "react";
import axios from "axios";

import '../css/index.css';


const Bid = (props) => {
    const [bid, setBid] = useState({
        auctionId: 0,
        bidderId: 0,
        amountBid: 0,
        dateOfBid: ""
    });

    const handleSubmit = (event) => {

        event.preventDefault();

        bid.auctionId = props.auction.id;
        bid.dateOfBid = Math.floor(Date.now() / 1000);
        axios
            .post("", bid) // need end point
            .then(response => console.log(response))
            .catch(err => console.log(err));
        console.log(bid);

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
