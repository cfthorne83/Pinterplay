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
        debugger
        if (!this.props.pins) {
            return null;
        }

        return (
            <>
                <h1>Pin show</h1>
                {/* <h1>{this.props.pin}</h1> */}

            </>
        )
    }
}

export default PinShow;