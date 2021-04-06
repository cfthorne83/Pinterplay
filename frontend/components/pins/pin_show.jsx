import React from "react";
import {Link} from "react-router-dom";

class PinShow extends React.Component {
    constructor(props){
        super(props);

        this.handleGoBack = this.handleGoBack.bind(this);
    }

    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
    }

    // componentDidUpdate(prevProps) {

    //     if (this.props.match.params.pinId !== prevProps.match.params.pinId){
    //         this.props.fetchPin(this.props.match.params.PinId);
    //     }
    // }

    handleGoBack() {
        history.back();
    }

    render() {
        if (!this.props.pin) {
            return null;
        }
        
        return (
            <div className="pin-show">
                <button onClick={this.handleGoBack}>go back</button>

                <h1>Pin show</h1>
                <h1>{this.props.pin.title}</h1>
                <img src={this.props.pin.image_url} alt=""/>
                <img 
                    onClick={()  => {this.props.openModal("editPin", this.props.pin.id)}} 
                    src="https://static.thenounproject.com/png/384290-200.png" 
                    alt="edit-form-link"
                    className='edit-pin-modal'/>
            </div>
        )
    }
}

export default PinShow;