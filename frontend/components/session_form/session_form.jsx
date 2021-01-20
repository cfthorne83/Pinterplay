import React from 'react';
import { Redirect } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.updatePassword = this.updatePassword.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    updateEmail(e) {
        this.setState({ email: e.currentTarget.value })
    }

    updatePassword(e) {
        this.setState({ password: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleDemo(){
        this.props.login({email: 'demoname', password: '123456'});
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => {
                    <li key={i}>{error}</li> 
                })}
            </ul>
        );
    }

    render() {
        if (this.props.currentUser) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <h1>{this.props.formType}</h1>

                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <br />
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.updateEmail} />
                    <br />
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.updatePassword} />
                    <br />
                    <button>{this.props.formType}</button>
                    <p>or</p>
                    <button onClick={this.handleDemo}>Demo Log in</button>

                    <p>{this.props.navLink}</p>

                </form> 
            </div>

        );
    }
}

export default SessionForm;