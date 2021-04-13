import React from 'react';

class CreateDropdown extends React.Component{
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
        }, 100);
    }

    render() {

        return (
            <button 
                className='dropdown-outer'
                onClick={this.handleClick} 
                onBlur={this.handleBlur}
                >
    
                <span>
                    <img src="/images/plus-icon.png" alt=""/>
                </span>
                    {this.state.show && (
                        <div className='dropdown-inner'>
                            
                               
                        <button >
                            Board
                        </button> 
                        <button >
                            Pin
                        </button> 
                                    
                
                        </div>
                    )}
            </button>
            
        );
    }
}

export default CreateDropdown;