import React from  "react";
import { Link } from 'react-router-dom';

class AddPinDropdown extends React.Component{
    constructor(props){
        super(props);

        this.state = {show: false};

        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick() {
        this.setState({ show: !this.state.show });
    }

    handleBlur() {
        window.setTimeout( () => {
            this.setState({ show: false })
        }, 100);
    }

    handleSubmit() {
        // this.props.openModal('addPin');
    }

    render() {

        return (
            <button
                className="dropdown-outer"
                onClick={this.handleClick}
                // onBlur={this.handleBlur}
                >
                    +
                        {this.state.show && (
                            <Link to="/pin-builder">
                                <div className='dropdown-inner'>           
                                    Pin
                                </div>
                            </Link>
                        )}
            </button>

        )
    }
}

export default AddPinDropdown;