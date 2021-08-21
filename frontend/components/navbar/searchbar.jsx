import React from 'react';

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state = { pins: null , searchTerm: "" }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        // debugger
        this.setState({
            searchTerm: e.currentTarget.value
        })
        this.props.searchInput(e.currentTarget.value);
    }
    
    handleSubmit(e) {
        debugger
        e.preventDefault();
        const searchbar = document.querySelector(".searchbar")
        e.currentTarget.blur();
        // debugger
        // this.props.searchInput(this.state.searchTerm);
        // this.setState({
        //     searchInput: ""
        // })
    }

    render() { 

        return (
            <div className='searchbar-outer'>
                <form className='searchbar-container'
                onSubmit={this.handleSubmit}>
                    <input  className='searchbar' 
                            type="search" 
                            placeholder="Search"
                            value={this.state.searchInput}
                            onChange={this.handleInput}/>
                </form>
            </div>
        )
    }
}

export default Searchbar;