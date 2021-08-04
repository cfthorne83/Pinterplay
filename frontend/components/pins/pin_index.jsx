import React from 'react';
import { Link } from 'react-router-dom';
import { BeatLoader } from "react-spinners";

import CreatePinDropdownContainer from "./create_pin_dropdown_container";

class PinIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = { loading: true, searchInput: this.props.searchInput, noFollows: false, fetched: false}
    }

    componentDidMount() {
        const that = this;
        debugger
        if (this.props.board){
            this.props.fetchPins({board: this.props.board.id}).then(this.setState({loading: false, fetched: true}));
        } else if (this.props.userPinIndex){
            this.props.fetchPins({user: this.props.currentUser.id}).then(this.setState({loading: false, fetched: true}));
        } else if (this.props.following){

            // let follows;
            // if (this.props.currentUser.following[0]){
            //     follows = this.props.currentUser.following.map( follow => {return follow.id})
            // } else {
            //     that.setState({ noFollows: true});
            // }
            // this.props.fetchPins({follows: follows, user_id: this.props.currentUser.id}).then(this.setState({loading: false}));
            this.props.fetchPins({follows: this.props.currentUser.id}).then(this.setState({loading: false, fetched: true}));
        } else {
            this.props.fetchPins().then(this.setState({loading: false, fetched: true}));
        }
        // this.setState({ fetched: true });
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


        if (this.state.fetched === false) {
          debugger
            return null;
        }
        if (this.props.pins.length === 0 ){
            return (
                <div className="pin-index-loader">
                    <BeatLoader 
                        className="create-pin-form__loader"
                        size={35} color="red" 
                        loading={this.state.loading}/>
                    {/* <h1>Retrieving Pins</h1> */}
                </div>
            )
        } 
        // else if ( this.props.board && this.props.pins.length === 0 && this.state.loading === false ) {
        //     return <h1 className="pin-index-empty">This board is empty, upload a pin!</h1>
        // } else if ( !this.props.following && this.props.pins.length === 0 && this.state.loading === false ){
        //     return <h1 className="pin-index-empty">There are no pins in the database:(</h1>
        // }

        let {pins, following} = this.props;

        if (this.props.shuffle){
            this.shuffleArray(this.props.pins);
        }

        const that = this;
        pins = pins.filter( pin => {
            if (that.props.searchInput === ""){
                return pin
            } else if ( pin.title.toLowerCase().includes( this.props.searchInput.toLowerCase() )){
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

        if (this.state.noFollows){
            return (
                <div></div>
            )
        } else {
            
            return (
                <div className="pin-index-outer">
                    <ul className='pin-index'>
                        {pins}
                    </ul> 
                    <CreatePinDropdownContainer className="pin-drop"/> 
                </div>
            )
        }
    }
}

export default PinIndex;