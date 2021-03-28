import React from "react";

class PinShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        debugger
        this.props.fetchPin(this.props.match.params.pinId)
    }

    render() {
        // if (!this.props.pins) {
        //     return null;
        // }
debugger
        return (
            <>
                <h1>Pin show</h1>
                <h1>{this.props.pin.title}</h1>

            </>
        )
    }
}

export default PinShow;