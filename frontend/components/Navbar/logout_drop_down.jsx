import React from 'react';

class LogoutDropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = { show: false }

        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleClick(){
        this.setState({ show: !this.state.show })
    }

    handleBlur(){
        window.setTimeout(() => {
            this.setState({ show: false })
        }, 50);
    }

    render() {

        return (
            <button 
                className='dropdown-outer'
                onClick={this.handleClick} 
                // onBlur={this.handleBlur}
                >
    
                    {/* <span>V</span> */}
                <span>
                    <img className='dropdown-icon' src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/dropdown_arrow-512.png" alt=""/>
                </span>
                    {this.state.show && (
                        <div className='dropdown-inner'>
                            <ul className='logout-dropdown'>
                                <ul>
                                    <li >Account</li>
                                    <li>Add another account</li>
                                    <li>Unlock business tools</li>
                                </ul>
                                <ul>
                                    <li>More Options</li>
                                    <li>Settings</li>
                                    <li>Tune your home feed</li>
                                    <li>Install the Chrome app</li>
                                    <li>Get help</li>
                                    <li>See the terms and privacy</li>
                                    <li><input 
                                            type="submit" 
                                            value='Log out' 
                                            onClick={this.props.logout} />
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    )}
            </button>
            
        )
    }
}

export default LogoutDropdown;