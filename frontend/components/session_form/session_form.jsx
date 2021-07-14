import React from 'react';
import { Redirect } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: []
            // demo: null
        };

        this.updatePassword = this.updatePassword.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillReceiveProps(nextProps) {
    // if (nextProps.currentUser === true) {
    //   this.props.history.push('/tweets');
    // }

    this.setState({errors: nextProps.errors})
  }

    updateEmail(e) {
        this.setState({ email: e.currentTarget.value });
    }

    updatePassword(e) {
        this.setState({ password: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        // if (this.state.demo){
        //     this.setState({ email: "demo@fakemail.com", password: "123456"});
        //     this.props.login({ email: "demo@fakemail.com", password: "123456"}).then(this.props.closeModal);
        // } else {
            this.props.processForm(this.state).then(this.props.closeModal);
        // }
    }
    
    handleDemo(){
        // this.setState({demo: 'demo'});
        this.setState({ email: "demo@fakemail.com", password: "123456" });
        this.props.login({ email: "demo@fakemail.com", password: "123456" }).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    handleErrors() {
        if (this.props.errors.length === 0){
            return this.props.closeModal();
        } 
    }

    render() {
        if (this.props.currentUser) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <div className='session-form'>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <img className='form-logo' src="https://seeklogo.com/images/P/pinterest-badge-logo-82C89A5E42-seeklogo.com.png" alt="myPin Logo" />
                    <h1>Welcome to myPin</h1>

                    <form className='session-inputs' onSubmit={this.handleSubmit}>
                            <br />
                            <div >
                                <input
                                    type="text"
                                    value={this.state.email}
                                    placeholder="   Email"
                                    onChange={this.updateEmail} 
                                    />
                            </div>

                            {/* <p className="errors">{Object.values(this.state.errors)}</p> */}
                            <div className="errors">{this.renderErrors()}</div>
                         
                                <input
                                    type="password"
                                    value={this.state.password}
                                    placeholder="   Password"
                                    onChange={this.updatePassword} />
                            <br />
                        <br />
                        <button className='modal-login'>{this.props.formType}</button>
                        <p className='or'>OR</p>
                        <button className='demo' onClick={this.handleDemo}>Demo Log in</button>
                        
                        <p>By continuing, you agree to myPin's </p>
                        <p className='bold'>Terms of Service, Privacy policy.</p>
                        <p className='border'></p>

                        <span className='other-form'>{this.props.otherForm}</span>

                        

                    </form> 
                </div>
            </div>
        );
    }
}

export default SessionForm;