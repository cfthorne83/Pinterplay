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
                <h1>{this.props.pin.title}</h1>
            </>
        )
    }
}

export default PinShow;