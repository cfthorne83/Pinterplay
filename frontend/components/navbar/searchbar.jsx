import React from 'react';

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state = { pins: null , searchTerm: "" }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.button = this.button.bind(this);
    }

    handleInput(e) {
        this.setState({
            searchTerm: e.currentTarget.value
        })
        this.props.searchInput(e.currentTarget.value);
    }
    
    handleSubmit(e) {
        // debugger
        e.preventDefault();
        // debugger
        // this.props.searchInput(this.state.searchTerm);
        this.setState({
            searchInput: ""
        })
    }

    button() {
        this.setState({
            searchInput: ""
        })
    }

    render() {
        debugger
        return (
            <div className='searchbar-outer'>
                <form className='searchbar-container'
                onSubmit={this.handleSubmit}
                >
                    <input  className='searchbar' 
                            type="text" 
                            placeholder="Search"
                            value={this.state.searchInput}
                            onChange={this.handleInput}/>
                </form>
                <button onClick={this.button}>alskdjf;lsakjdfl;kasas;dlfkasldfjkjewrsß</button>
            </div>
        )
    }
}

export default Searchbar;