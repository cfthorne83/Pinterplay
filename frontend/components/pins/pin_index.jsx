import React from 'react';
import { Link } from 'react-router-dom';
import { BeatLoader } from "react-spinners";

class PinIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = { loading: true }
    }

    componentDidMount() {
        this.props.fetchPins(this.props.board).then(this.setState({loading: false}));
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

    render() {

        if (!this.props.pins){
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