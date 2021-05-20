import React from 'react';
import { Link } from 'react-router-dom';
import { BeatLoader } from "react-spinners";

import CreatePinDropdownContainer from "./create_pin_dropdown_container";

class PinIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = { loading: true }
    }

    componentDidMount() {
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

    pinCount() {
        if (this.props.pins.length === 1 && this.props.board) {
            return <h1>1 Pin</h1>; 
        } else if (this.props.board) {
            return <h1>{this.props.pins.length} Pins</h1>;
        } else {
            return null;
        }
    }

    capitalize(title) {
        return title.charAt(0).toUpperCase() + title.slice(1);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    render() {

        debugger
        if (!this.props.pins){
            return null;
        }
        
        if (this.props.shuffle){
            this.shuffleArray(this.props.pins);
        }

        // const pins = this.props.pins.filter( pin => {
        //         if (this.props.searchInput === ""){
        //             return pin
        //         } else if ( pin.title.toLowerCase().includes( this.props.searchInput.toLowerCase() )){
        //             return pin
        //         }
        //     }).map( (pin, i) => {
        //         return (
        //             <li>{pin.title}</li>
        //         )
        //     })
        let pins = this.props.pins.filter( pin => {
            if (this.props.searchInput === ""){
                return pin
            }
        }).map(pin => {
            return (
                <Link 
                    key={`${pin.id}`} 
                    to={`/pins/${pin.id}`}
                    className="pin-index__item">
                        <img src={`${pin.image_url}`} alt=""/>
                        <h2>{this.capitalize(pin.title)}</h2>
                </Link>
            )
        })

            
        return (
            // <div className="pin-index-outer">
            <div className="pin-index-outer">
                {/* {this.pinCount()} */}
                <ul className='pin-index'>
                    {pins}
                </ul> 
                <CreatePinDropdownContainer className="pin-drop"/> 
            </div>
    // </div>
        )
    }
}

export default PinIndex;