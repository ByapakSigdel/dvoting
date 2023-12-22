import React from "react";

const Login = (props) => {
    return (
        <div className="login-container">
            <h1 className="welcome-message">Welcome to Decentralized voting, Please Login to Continue</h1>
            <button className="login-button" onClick = {props.connectWallet}>Login</button>
        </div>
    )
}

export default Login;