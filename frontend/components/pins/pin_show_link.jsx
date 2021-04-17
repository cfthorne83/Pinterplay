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

            <div className="pin-show-link">
                {/* <div> */}
                    <h1>Saved to {this.props.board}</h1>
                    <img src={this.props.image} alt="pin image"/>
                {/* </div> */}
                <div className="pin-show-link__btn-con">
                    <Link 
                        onClick={this.handleClick}
                        to={`/pins/${this.props.pinId}`}>
                            <button className="pin-show-link__btn">
                                See it now
                            </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default PinShowLink;