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

        // if (!this.props.pins){
        //     return null;
        // }
        
        
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
                {/* {this.pinCount()} */}
                <ul className='pin-index'>
                    {/* {pins} */}
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w2OTk2Mzc4OHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1569705474611-051bf56f332c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1602422701241-7ba4f6fc1712?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80" alt=""/>
                    </div> 
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1582400145495-214216c4e607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1541356665065-22676f35dd40?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1588588430742-ddfa480872b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="" alt=""/>
                    </div>
                </ul>  
            </div>
    
        )
    }
}

export default PinIndex;