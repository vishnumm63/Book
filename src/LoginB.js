import React, { useState } from "react";

export default function LoginB(props) {
    const [data, setData] = useState({
        email: "",
        password: "",
        conPassword: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setData((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    return (
        <form>
            <input
                className='log_input'
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Login Id"
                value={data.email}
            />
            <input
                className='log_input'
                onChange={handleChange}
                name="password"
                type="text"
                placeholder="Password"
                value={data.password}
            />
            <input
                className='log_input'
                onChange={handleChange}
                name="conPassword"
                type="text"
                placeholder="Confirm Password"
                value={data.conPassword}
            />
            <button className="rgbtn">Register</button>
        </form>
    );
}