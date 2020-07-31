import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
    
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
            console.log("Loading private route", localStorage.getItem("token"));
          // Render the given component if we are logged in and have a token
          return <Component {...props} />;
        } else {
          // redirect to login if no token is found
          console.log("redirecting!");
          return <Redirect to="/login" />;
        }
      }}
      
    />
    
  );
};

export default PrivateRoute;