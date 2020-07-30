import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import * as yup from 'yup';
import Input from './Input';

// react 2
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from "react-router-dom";

function Login(props) {

    //** REACT 2 */
    let history = useHistory();
    //*** END REACT 2 */
    
    const defaultState = {
        username: "",
        password: ""
    };

    const [errors, setErrors] = useState({...defaultState});
    const [loginState, setLoginState] = useState(defaultState);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    let formSchema = yup.object().shape({
        username: yup
            .string()
            .required('Username is required')
            .min(8, "Username must be 8 characters"),
        password: yup
            .string()
            .required('Password is required')
            .min(8, "Password must be 8 characters"),
    });

    //state set for the login button to be enabled or disabled
    useEffect(() => {
        if (loginState.username && loginState.password) {
            setButtonDisabled(false);
        }
        else if (!loginState.username || !loginState.password) {
            setButtonDisabled(true);
        }
    }, [loginState]);

    //validate whether value meets the schema
    // const validateChange = e => {
    //     //this allows react to keep the event object to play nice with async op
    //     e.persist();
    //     if (e.target.value.length === 0) {
    //       setErrors({
    //         ...errors,
    //         [e.target.name]: `${e.target.name} field is required`
    //       });
    //     }
    //   };
    
    //submit input for login
    const loginSubmit = e => {
        e.preventDefault();
        console.log("login submitted");

        //**REACT 2 built and imported axios authentication. */
        axiosWithAuth().post('auth/login', loginState, {withCredentials: true})
        .then(res => {
          console.log(res);
          localStorage.setItem('token', res.data.payload);
          history.push("/");
        })
        .catch(err => {
            console.log("invalid login.", err);
        })
        //** END REACT 2 */
    }

    //onChange function, put validation within function
    const inputChange = e => {
        e.persist();
        let value = e.target.value;
        yup.reach(formSchema, e.target.name)
        .validate(value)
        .then(valid => {
            setErrors({
                ...errors,
                [e.target.name]: ""
            })
        })
        .catch(err => {
            setErrors({
            ...errors,
            [e.target.name]: err.errors[0]
            })
        })
        //spread accross loginState and set to value of input. 
        setLoginState({
            ...loginState,
            [e.target.name]: e.target.value
        });
        console.log(loginState);
        // validateChange(e);
    };

    return (
        <div className="formContainer">
            <form onSubmit={loginSubmit}>
                <Input
                    type="text"
                    name="username"
                    onChange={inputChange}
                    value={loginState.username}
                    label="User Name"
                    errors={errors}
                />
                <Input
                    type="password"
                    name="password"
                    onChange={inputChange}
                    value={loginState.password}
                    label="Password"
                    errors={errors}
                />
                <button disabled={buttonDisabled}>Login</button>
            </form>
        </div>
    )
};

export default Login;