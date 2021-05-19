import React from 'react';

class Searchbar extends React.Component{
    constructor(props){
        super(props);

        this.state = { pins: null, searchTerm: "" }

        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        const that = this;
        $.ajax({
            url: 'api/pins',
            method: 'GET'
        }).then(
            (response) => {
                that.setState({ pins: response})
            }
        )
    }

    handleInput(e) {
        this.setState({
            searchTerm: e.currentTarget.value
        })
    }

    render() {
        
        if (!this.state.pins) return null;

            const pins = Object.values(this.state.pins).filter( pin => {
                if (this.state === ""){
                    return pin
                } else if ( pin.title.toLowerCase().includes( this.state.searchTerm.toLowerCase() )){
                    return pin
                }
            }).map( (pin, i) => {
                return (
                    <li>{pin.title}</li>
                )
            })
        
        return (
            <div>
                <form className='searchbar-container'>
                    <input  className='searchbar' 
                            type="text" 
                            placeholder="Search" 
                            onChange={this.handleInput}/>
                </form>
                <ul>
                    {pins}
                </ul>
            </div>
        )
    }
}

export default Searchbar;