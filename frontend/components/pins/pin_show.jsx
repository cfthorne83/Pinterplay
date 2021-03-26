import React from "react";

class PinShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId);
    }

    render() {
        return (
            <>

                // <img src={this.props.pin.image_url }alt=""/>
                <h1>{this.props.pin.title}</h1>
                <h1>sadfasdf</h1>
            </>
        )
    }
}

export default PinShow;