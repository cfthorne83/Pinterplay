import React from "react";

class EditPinForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPin(this.props.pinId);
    }

    render() {

    if (!this.props.pin){
        return null;
    }
        return (
            <h1>edit pin form</h1>
        )
    }
}

export default EditPinForm;