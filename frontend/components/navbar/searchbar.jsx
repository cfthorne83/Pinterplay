import React from 'react';

class Searchbar extends React.Component{
    constructor(props){
        super(props);

        this.state = { pins: null }
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

    render() {

        if (!this.state.pins) return null;
            const pins = Object.values(this.state.pins).map( (pin, i) => {
                return (
                    <li key={i}>{pin.title}</li>
                )
            })
        
        return (
            <div>
                <form className='searchbar-container'>
                    <input  className='searchbar' 
                            type="text" 
                            placeholder="Search" />
                </form>
                <ul>
                    {pins}
                </ul>
            </div>
        )
    }
}

export default Searchbar;