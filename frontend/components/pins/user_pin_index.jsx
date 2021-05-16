import React from 'react'; 
import PinIndexContainer from './pin_index_container';

const UserPinIndex = (props) => {
    return (
        <div>
            <h1>all pins</h1>
            <PinIndexContainer userPinIndex={true} />
        </div>
    )
}

export default UserPinIndex;