import React from "react";
import axios from "axios";

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState ({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();

        axios
        .post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/api/friends');
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                      placeholder="Enter Username"
                      type = "text"
                      name = "username"
                      value = {this.state.credentials.username}
                      onChange = {this.handleChange}
                    />

                    <input
                      placeholder="Enter Password"
                      type = "password"
                      name = "password"
                      value = {this.state.credentials.password}
                      onChange = {this.handleChange}
                    />

                    <button type="submit" onClick={this.login}>Log In</button>

                </form>
            </div>
        );
    }
}

export default Login;