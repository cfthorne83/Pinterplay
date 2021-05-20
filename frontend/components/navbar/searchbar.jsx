import React from 'react';

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state = { pins: null , searchTerm: "" }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const that = this;
        this.props.fetchPins().then(
            this.setState({ pins: Object.values(that.props.pins) }));
    }

    handleInput(e) {
        this.setState({
            searchTerm: e.currentTarget.value
        })
        this.props.searchInput(e.currentTarget.value);
    }
    
    handleSubmit(e) {
        this.props.searchInput(e.currentTarget.value);
    }

    render() {
        
        return (
            <div>
                <form className='searchbar-container'
                // onSubmit={this.handleSubmit}
                >
                    <input  className='searchbar' 
                            type="text" 
                            placeholder="Search" 
                            onChange={this.handleInput}/>
                </form>
            </div>
        )
    }
}

export default Searchbar;