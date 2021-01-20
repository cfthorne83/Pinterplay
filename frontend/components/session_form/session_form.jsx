import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };

        this.updatePassword = this.updatePassword.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateUsername(e) {
        this.setState({ username: e.currentTarget.value })
    }

    updatePassword(e) {
        this.setState({ password: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map(error => {
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                })}
            </ul>
        );
    }

    render() {

        return (
            <div>
                <h1>{this.props.formType}</h1>
                <br />
                <form onSubmit={this.handleSubmit}>

                    {this.renderErrors()}
                    <br />
                    <label >Enter Username
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.updateUsername} />
                    </label>
                    <br />
                    <label> Enter Password
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.updatePassword} />
                    </label>
                    <br />
                    <button>{this.props.formType}</button>

                    <p>{this.props.navLink}</p>

                </form>
            </div>
        );
    }
}

export default SessionForm;