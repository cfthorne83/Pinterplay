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
            <>
                <h1>Pin show</h1>
                <h1>{this.props.pin.title}</h1>
                <img src={this.props.pin.image_url} alt=""/>
            </>
        )
    }
}

export default PinShow;