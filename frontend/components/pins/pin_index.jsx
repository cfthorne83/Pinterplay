import React from 'react';
import { Link } from 'react-router-dom';

class PinIndex extends React.Component {

    componentDidMount() {
        this.props.fetchPins();
    }

    render() {

        let pins = this.props.pins.map(pin => {
            // return <Link to={`/pins/${pin.id}`}><li key={`${pin.id}`}>{pin.title}</li></Link>
            return (
                    // <li key={`${pin.id}`}>{pin.title}</li>
                    <li key={`${pin.id}`}><img src={`${pin.image_url}`} alt=""/></li>
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