import React from  "react";

class AddPinDropdown extends React.Component{
    constructor(props){
        super(props);

        this.state = {show: false};

        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ show: !this.state.show });
    }

    handleBlur() {
        window.setTimeout( () => {
            this.setState({ show: false })
        }, 100);
    }

    render() {

        return (
            <button
                className="dropdown-outer"
                onClick={this.handleClick}
                onBlur={this.handleBlur}
                >
                    <span>
                        <img className='dropdown-icon' src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/dropdown_arrow-512.png" alt=""/>
                    </span>
                        {this.state.show && (
                            <div className='dropdown-inner'>           
                                <button>
                                    Pin
                                </button>
                            </div>
                        )}
            </button>

        )
    }
}

export default AddPinDropdown;