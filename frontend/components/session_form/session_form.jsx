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
        this.handleErrors = this.handleErrors.bind(this);
    }

    updateEmail(e) {
        this.setState({ email: e.currentTarget.value });
    }

    updatePassword(e) {
        this.setState({ password: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    handleDemo(){
        this.setState({ email: 'demoEmail', password: '123456' });
        this.props.login({email: 'demoEmail', password: '123456'});
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

    handleErrors() {
        if (this.props.errors.length !== 0) this.props.closeModal();
    }

    render() {
        if (this.props.currentUser) {
            return <Redirect to='/' />
        }

        return (
            <div onSubmit={this.handleErrors}>
                <h1>{this.props.formType}</h1>

                <form onSubmit={this.handleSubmit}>
                    
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

                    <span>{this.props.otherForm}</span>
                    <span>{this.renderErrors()}</span>
                </form> 
            </div>

        );
    }
}

export default SessionForm;