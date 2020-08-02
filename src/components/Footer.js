import React from 'react';
import { useHistory } from "react-router-dom";
import '../css/index.css';
import axios from 'axios'; // will upgrade to axiosWithAuth

const Footer = props => {
    const history = useHistory();

    const logOut = () => {
        axios
        .delete(`https://silent-auction-kb.herokuapp.com/api/auth/logout`, {withCredentials: true})
        .then(res => {
          console.log(res);
                  
          
        })
        .catch(err => {
            console.log("invalid login.", err);
        })

        localStorage.removeItem("token");
        props.setLoggedIn(false);
        history.push("/auctions");
    }

    return (

        <div className="footer-container">
                <footer>
                <p>&copy; 2020 <a href={`https://github.com/orgs/Silent-Auction-1/people`} target="new">Silent Auction 1 Team</a> </p>  

                <h3><a href={`https://github.com/Silent-Auction-1`} target="new">Silent Auction 1</a></h3>
                {localStorage.getItem("token") ?
                <div className="log-out" onClick={logOut}>Log out</div>
            :
            ""}
                </footer>
                
            </div>

    );
}

export default Footer;