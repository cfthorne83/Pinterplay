import React from 'react';
import { Link } from 'react-router-dom';

class PinIndex extends React.Component {

    componentDidMount() {
        this.props.fetchPins(this.props.board);
    }

    pinCount() {
        if (this.props.pins.length === 1) {
            return <h1>1 Pin</h1>; 
        } else {
            return <h1>{this.props.pins.length} Pins</h1>;
        }
    }

    capitalize(title) {
        return title.charAt(0).toUpperCase() + title.slice(1);
    }

    render() {
        
        if (!this.props.pins) {
            return null;
        }

        let pins = this.props.pins.map(pin => {

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
            
            <div className="pin-index-con">
                {this.pinCount()}
                <ul className='pin-index'>
                    {pins}
                </ul>  
            </div>
    
        )
    }
}

export default PinIndex;