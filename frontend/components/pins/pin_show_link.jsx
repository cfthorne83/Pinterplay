import React from "react";
import {Link} from "react-router-dom";

class PinShowLink extends React.Component{

    render() {
        return (

            <div>
                <h1>pin show link</h1>
                <Link to={`/pins/${this.props.pinId}`}>gooble</Link>
            </div>
        )
    }
}

export default PinShowLink;