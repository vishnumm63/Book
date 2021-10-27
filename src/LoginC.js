import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { stockData } from "./data";

export default class LoginC extends Component {
    state = {
        email: "",
        password: "",
        login: false,

    };

    handlerChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handlerSubmit = (event) => {
        event.preventDefault();
        for (let i of stockData) {

            const { email, password } = this.state
            if (email === i.username && password === i.password) {
                sessionStorage.setItem('username', email);
                this.setState({
                    login: true
                })
            } else {
                // alert('failed')
            }
        }
    }

    render() {

        if (this.state.login) {
            return <Redirect to="/app" />
        }
        return (
            <div>
                <form onSubmit={this.handlerSubmit}>
                    <input
                        className='log_input'
                        onChange={this.handlerChange}
                        name="email"
                        type="email"
                        placeholder="Login Id"
                        value={this.state.email}
                    />
                    <input
                        className='log_input'
                        onChange={this.handlerChange}
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                    />
                    <input type="submit" value="submit" className='sbtn' />
                </form>
            </div>
        );
    }
}