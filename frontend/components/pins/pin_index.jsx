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
                // <div className="pin-index__item" key={pin.id}>
                    <Link 
                        key={`${pin.id}`} 
                        to={`/pins/${pin.id}`}
                        className="pin-index__item">
                            <img src={`${pin.image_url}`} alt=""/>
                            <li>{pin.title}</li>
                    </Link>
                // </div>
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