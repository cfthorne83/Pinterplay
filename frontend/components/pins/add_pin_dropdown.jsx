import React from  "react";

class AddPinDropdown extends React.Component{
    constructor(props){
        super(props);

        this.state = {show: false};

        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handlePinClick = this.handlePinClick.bind(this);
    }

    handleClick() {
        this.setState({ show: !this.state.show });
    }

    handleBlur() {
        window.setTimeout( () => {
            this.setState({ show: false })
        }, 100);
    }

    handlePinClick() {
        console.log("gabba");
    }

    render() {

        return (
            <button
                className="dropdown-outer"
                onClick={this.handleClick}
                onBlur={this.handleBlur}
                >
                    +
                        {this.state.show && (
                            <div className='dropdown-inner'>           
                                <button onClick={this.handlePinClick}
                                        onClick={this.props.openModal()}>
                                    Pin
                                </button>
                            </div>
                        )}
            </button>

        )
    }
}

export default AddPinDropdown;