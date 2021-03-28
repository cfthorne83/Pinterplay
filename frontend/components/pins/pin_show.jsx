import React from "react";

class PinShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
    }

    // componentDidUpdate(prevProps) {

    //     if (this.props.match.params.pinId !== prevProps.match.params.pinId){
    //         this.props.fetchPin(this.props.match.params.PinId);
    //     }
    // }

    render() {
        if (!this.props.pin) {
            return null;
        }
        
        return (
            <div className="pin-show">
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