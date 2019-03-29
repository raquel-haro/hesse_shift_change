import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import config from './config.json';
import { Route, Switch, Redirect } from 'react-router-dom'
import Main from "./Main";


class App extends Component {

    constructor() {
        super();
        this.state = { 
            isAuthenticated: false, 
            user: null,
        };
    }

    // Logs user out of system, causes return to log in page
    logout = () => {
        this.setState({isAuthenticated: false, user: null})
    };

    // Returns an error if authentication fails
    onFailure = (error) => {
        alert(error);
    };

    // Handle the Authentication Details
    // w3 = whole object file
    // U3 = "email@valpo.edu"
    // ig = "first last"
    // ofa = "first"
    // wea = "last"
    googleResponse = (response) => {
        if(response) {
            this.setState({
                isAuthenticated:true, 
                user:response.w3
            })
        }
    };

    render() {
        // Determine what the user will view based on authentication status
        let content = !!this.state.isAuthenticated ?
                (
                    // User has been logged in, display main web application
                    <Main 
                        email = {this.state.user.U3}
                        name = {this.state.user.ig}
                        logout = {this.logout}
                    />
                ) :
                (
                    // No user registered or logged in. Show sign in page
                    <div>
                        <h1>Hesse Center Shift Manager</h1>
                        <GoogleLogin
                            clientId={config.GOOGLE_CLIENT_ID}
                            buttonText="Login with Google"
                            onSuccess={this.googleResponse}
                            onFailure={this.onFailure}
                        />
                    </div>
                );
    
            return (
                <div className="App">
                    {content}
                </div>
            );
        }
    }
    
    export default App;