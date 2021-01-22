import React from 'react';

// const LogoutDropdown = (props) => (
//     <div >
//         <button onClick={props.logout}>Log Out</button>
//     </div>
// );

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
                className='dropdown-button'
                onClick={this.handleClick} 
                >
    
                    <span>dropdown</span>
                    {this.state.show && (
                        <div className='dropdown-contents'>
                            <ul>
                                <li>Settings</li>
                                <li><input type="submit" value='Log out' onClick={this.props.logout} /></li>
                            </ul>
                        </div>
                    )}
            </button>
        )
    }
}

export default LogoutDropdown;