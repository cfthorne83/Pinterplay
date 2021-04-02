import React from  "react";
import { Link } from 'react-router-dom';

class CreatePinDropdown extends React.Component{
    constructor(props){
        super(props);

        this.state = {show: true};

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
                    // onClick={this.handleClick}
                    // onBlur={this.handleBlur}
                    >
                        <div className="crt-pin-drop__image">
                            <img src="/images/plus-icon.png" alt=""/>
                        </div>
            
                            {this.state.show && (
                                <div className='crt-pin-drop__inner'>
                                        <h2>Create</h2> 
                                        <Link to="/pin-builder">
                                            <h1>Pin</h1>          
                                        </Link>
                                    </div>
                            )}
                </button>
            </div>

        )
    }
}

export default CreatePinDropdown;