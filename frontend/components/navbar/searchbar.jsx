import React from 'react';

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state = { pins: null , searchTerm: "" }

        this.handleInput = this.handleInput.bind(this);
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

    render() {

        if (!this.props.pins) return null;
        const pins = Object.values(this.props.pins).filter( pin => {
                if (this.state.searchTerm === ""){
                    return pin
                } else if ( pin.title.toLowerCase().includes( this.state.searchTerm.toLowerCase() )){
                    return pin
                }
            }).map( (pin, i) => {
                return (
                    <li>{pin.title}</li>
                )
            })


        // const pins = Object.values(this.props.pins).map( (pin, i) => {
        //     return <li key={i}>{pin.title}</li>
        // })

        
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