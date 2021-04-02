import React from  "react";
import { Link } from 'react-router-dom';

class CreatePinDropdown extends React.Component{
    constructor(props){
        super(props);

        this.state = {show: false};

        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    handleClick() {
        this.setState({ show: !this.state.show });
    }

    handleBlur() {
        window.setTimeout( () => {
            this.setState({ show: false })
        }, 100);
        let button = document.querySelector(".crt-pin-drop__image");
        let cross = document.querySelector(".cross");
        button.classList.remove("butt-focus");
        button.classList.add("butt-blur");
        cross.classList.remove("cro-focus");
    }

    handleFocus() {
        let button = document.querySelector(".crt-pin-drop__image");
        let cross = document.querySelector(".cross");
        button.classList.remove("butt-blur");
        button.classList.add("butt-focus");
        cross.classList.add("cro-focus");
    }

    render() {

        return (
            <div className="crt-pin-drop">
                <button
                    className="crt-pin-drop__outer"
                    onClick={this.handleClick}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    >
                        <div className="crt-pin-drop__image butt-blur">
                            <img  
                                className="cross" 
                                src="/images/plus-icon.png" alt=""/>
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