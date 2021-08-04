import React from 'react'; 
import PinIndexContainer from './pin_index_container';
import CreatePinDropdownContainer from "./create_pin_dropdown_container";


const UserPinIndex = (props) => {
    return (
        <div >
            <h1 className="all-pins">All Pins</h1>
            <PinIndexContainer userPinIndex={true} currentUser={props.currentUser}/>
            {/* <CreatePinDropdownContainer className="pin-drop"/> */}
        </div>
    )
}

export default UserPinIndex;