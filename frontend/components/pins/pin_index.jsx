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
            // return <Link to={`/pins/${pin.id}`}><li key={`${pin.id}`}>{pin.title}</li></Link>
            return <Link key={`${pin.id}`} to={`/pins/${pin.id}`}><li>{pin.title}</li></Link>

            // return (

            //         <li className="pin-item" key={`${pin.id}`}>
            //             <h1>{pin.title}</h1>
            //             <Link to={`./pins/${pin.id}`}>
            //                 <img src={`${pin.image_url}`} alt=""/>
            //             </Link>
            //         </li>
            //     )
                
        })
        
        return (
            
                <ul className='pin-index'>
                        {pins}
                </ul>  
    
        )
    }
}

export default PinIndex;