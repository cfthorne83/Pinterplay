import React from 'react';
import {Redirect} from 'react-router-dom';

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state = { pins: null , searchTerm: "", submit: false, display: "none" }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        this.setState({ searchTerm: ""})
        const searchbar = document.querySelector(".searchbar");
        searchbar.blur();
        this.props.searchInput();
    }

    // handleChange(e) {
    //     debugger
    //     // this.props.searchInput("");
    // }

    handleInput(e) { 
        this.setState({
            searchTerm: e.currentTarget.value
        });
        if (e.currentTarget.value != ""){
            this.setState({
                display: "inline"
            })
        } else {
            this.setState({
                display: "none"
            })
        }
        this.props.searchInput(e.currentTarget.value);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        // this.setState({ submit: true }, () => {
        //     this.props.searchInput({searchTerm: this.state.searchTerm, submit: this.state.submit})
        // }
        //     );
        this.props.searchInput(this.state.searchTerm);

        const searchbar = document.querySelector(".searchbar");
        searchbar.blur();
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
                <button 
                    className="searchbar-close"
                    style={{display: this.state.display}}
                    onClick={this.handleClick}>
                        <img src="./images/x.png" alt="close-icon" />
                </button>
            </div>
        )
    }
}

export default Searchbar;