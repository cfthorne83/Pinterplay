import React from 'react';
import {Redirect} from 'react-router-dom';

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state = { pins: null , searchTerm: "", submit: false }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({
            searchTerm: ""
        })
        this.forceUpdate();
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
        // this.setState({ submit: true }, () => {
        //     this.props.searchInput({searchTerm: this.state.searchTerm, submit: this.state.submit})
        // }
        //     );
        
        // const searchbar = document.querySelector(".searchbar");
        // searchbar.blur();
    }

    render() { 
        // if (this.state.submit){
        //     return <Redirect to="/" />
        // }
        return (
            <div className='searchbar-outer'>
                <form className='searchbar-container'
                    onSubmit={this.handleSubmit}
                >
                    <input  className='searchbar' 
                            type="input" 
                            placeholder="Search"
                            value={this.state.searchTerm}
                            onChange={this.handleInput}
                            />
                </form>
                <button style={{fontSize: "20px"}}
                    onClick={this.handleClick}>X</button>
            </div>
        )
    }
}

export default Searchbar;