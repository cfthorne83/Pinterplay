import React from 'react';
import { Link } from 'react-router-dom';

class PinIndex extends React.Component {

    componentDidMount() {
        this.props.fetchPins(this.props.board);
    }

    render() {

        if (!this.props.pins) {
            return null;
        }

        let pins = this.props.pins.map(pin => {

            return (
                <Link key={`${pin.id}`} to={`/pins/${pin.id}`}>
                    <li>{pin.title}</li>
                    <img src={`${pin.image_url}`} alt=""/>
                </Link>
            )
        })
        
        return (
            
                <ul className='pin-index'>
                        {pins}
                </ul>  
    
        )
    }
}

export default PinIndex;