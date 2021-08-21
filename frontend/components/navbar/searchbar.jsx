import React from 'react';

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state = { pins: null , searchTerm: "" }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({
            searchTerm: ""
        })
    }

    // handleChange(e) {
    //     debugger
    //     // this.props.searchInput("");
    // }

    handleInput(e) {
        this.setState({
            searchTerm: e.currentTarget.value
        })
        // this.props.searchInput(e.currentTarget.value);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        // const searchbar = document.querySelector(".searchbar");
        // searchbar.blur();
        // this.props.searchInput(this.state.searchTerm);
        // this.setState({
        //     searchInput: ""
        // })
    }

    render() { 

        return (
            <div className='searchbar-outer'>
                <form className='searchbar-container'
                    onSubmit={this.handleSubmit}
                >
                    <input  className='searchbar' 
                            type="input" 
                            placeholder="Search"
                            value={this.state.searchTerm}
                            onInput={this.handleInput}
                            // onChange={this.handleChange}
                            // onClick={this.handleClick}
                            />
                </form>
                <button style={{fontSize: "20px"}}
                    onClick={this.handleClick}>X</button>
            </div>
        )
    }
}

export default Searchbar;