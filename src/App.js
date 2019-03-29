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

    logout = () => {
        this.setState({isAuthenticated: false, token: '', user: null})
    };

    onFailure = (error) => {
        alert(error);
    };

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
        let content = !!this.state.isAuthenticated ?
                (
                    <Main 
                        email = {this.state.user.U3}
                        name = {this.state.user.ig}
                        logout = {this.logout}
                    />
                    // <div>
                    //     <p>Authenticated</p>
                    //     <div>
                    //         {this.state.user.U3}
                    //     </div>
                    //     <div>
                            // <button onClick={this.logout} className="button">
                            //     Log out
                            // </button>
                    //     </div>
                    // </div>
                ) :
                (
                    <div>
                        <h1>Hesse Center Shift Manager</h1>
                        <GoogleLogin
                            clientId={config.GOOGLE_CLIENT_ID}
                            buttonText="Login"
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