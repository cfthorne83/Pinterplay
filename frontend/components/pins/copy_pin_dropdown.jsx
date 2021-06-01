import React from "react";

class CopyPinDropdown extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.pin;

    }

    componentDidMount() {
        this.props.fetchBoards();
    }

    render() {
        return (
            <div>s;lkdfjl;k</div>
        )
    }
}