import React from 'react';
import { Link } from 'react-router-dom';

class PinIndex extends React.Component {

    componentDidMount() {
        debugger
        this.props.fetchPins(this.props.board);
        // this.props.fetchPins(this.props.match.params.boardId)
    }

    render() {
        debugger

        if (!(this.props.pins && this.props.board)) {
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