import React, { useState } from "react";
import LoginC from "./LoginC";
import LoginB from "./LoginB";
import './login.css';

export default function Login() {
    const [show, setShow] = useState(false);
    const [shows, setShows] = useState(false);

    function handleSignIn() {
        setShow(true);
        setShows(false);
        // event.preventDefault();
    }
    function handleSignUp() {
        setShows(true);
        setShow(false);
        // event.preventDefault();
    }

    return (
        <section>
            <div className="main">
                <div className="submain">
                    <h3 className='log_h1'> Welcome  Readers! </h3>
                    <div className="buttons">
                        <button className="sign-btn" onClick={handleSignIn}>
                            Sign In
                        </button>
                        <button className="sign-btn" onClick={handleSignUp}>
                            Sign Up
                        </button>
                    </div>
                    <div className="inputs">
                        {show ? <LoginC /> : null}
                        {shows ? <LoginB /> : null}
                    </div>
                </div>
            </div>
        </section>
    );
}