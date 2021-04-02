import React from  "react";
import { Link } from 'react-router-dom';

class CreatePinDropdown extends React.Component{
    constructor(props){
        super(props);

        this.state = {show: false};

        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ show: !this.state.show });
    }

    handleBlur() {
        window.setTimeout( () => {
            this.setState({ show: false })
        }, 100);
    }

    render() {

        return (
            <div className="crt-pin-drop">
                <button
                    className="crt-pin-drop__outer"
                    onClick={this.handleClick}
                    onBlur={this.handleBlur}
                    >
                        <div className="crt-pin-drop__image">
                            <img src="/images/plus-icon.png" alt=""/>
                        </div>
            
                            {this.state.show && (
                                <Link to="/pin-builder">
                                    <div className='crt-pin-drop__inner'>
                                        <h2>Create</h2> 
                                        <h1>Pin</h1>          
                                    </div>
                                </Link>
                            )}
                </button>
            </div>

        )
    }
}

export default CreatePinDropdown;