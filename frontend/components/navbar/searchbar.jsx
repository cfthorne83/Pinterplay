import React from 'react';

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state = { pins: null , searchTerm: "" }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // this.props.fetchPins();
        // if (this.props.following){
        //     const boards = this.props.currentUser.following
        //     this.props.fetchPins(this.props.board).then(this.setState({loading: false}));
        // } else {
        // if (this.props.board){
        //     this.props.fetchPins({board: this.props.board.id}).then(this.setState({loading: false}));
        // } else if (this.props.userPinIndex){
        //     this.props.fetchPins({user: this.props.currentUser.id}).then(this.setState({loading: false}));
        // } else if (this.props.following){
        //     const follows = this.props.currentUser.following.map( follow => {return follow.id})
        //     this.props.fetchPins({follows: follows}).then(this.setState({loading: false}));
        // } else {
        //     this.props.fetchPins().then(this.setState({loading: false}));
        // }
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