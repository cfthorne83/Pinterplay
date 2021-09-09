import React from 'react';

class LogoutDropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = { show: false }

        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.logout = this.logout.bind(this);
    }

    handleClick(){
        this.setState({ show: !this.state.show })
    }

    handleBlur(){
        if (this.props.currentUser){
            window.setTimeout(() => {
                this.setState({ show: false })
            }, 100);
        }
    }

    logout() {
        this.props.logout();
        this.props.clearSearchTerm();
    }

    render() {

        return (
            <button 
                className='dropdown-outer'
                onClick={this.handleClick} 
                onBlur={this.handleBlur}
                >
    
                <span>
                    <img src="/images/dropdwn-icon.png" alt=""/>
                </span>
                    {this.state.show && (
                        <div className='dropdown-inner'>     
                            <h3>Options</h3>
                            {/* <button onClick={this.props.logout}>
                                Log out
                            </button>  */}
                            <input 
                                type="submit"
                                // onClick={this.props.logout}
                                onClick={this.logout}
                                value="Log out"
                            />
                            {/* <input type="text" 
                            value="Log out" onClick={this.props.logout} />                 */}
                        </div>
                    )}
            </button>
            
        )
    }
}

export default LogoutDropdown;