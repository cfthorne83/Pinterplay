import React from "react";
import {Link} from "react-router-dom";

class PinShowLink extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.closeModal();
    }

    render() {
        return (

            <div>
                <h1>pin show link</h1>
                <Link 
                    onClick={this.handleClick}
                    to={`/pins/${this.props.pinId}`}>
                        gooble
                </Link>
            </div>
        )
    }
}

export default PinShowLink;