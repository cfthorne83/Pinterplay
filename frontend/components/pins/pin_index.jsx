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
                    {/* <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1541356665065-22676f35dd40?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div> */}
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1517776832751-0a7e6993de03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1517923505553-0e984c9b1eed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1522334042173-30aa7df84b8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1584278773680-8d940a213dcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1573765727997-e02883182ba7?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1578926078693-4eb3d4499e43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1579783902915-f0b0de2c2eb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1506813561347-cbbdf7b3f520?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTEwfDY5OTYzNzg4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1582561833407-b95380302a43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN0aWxsJTIwbGlmZSUyMHBhaW50aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1535083252457-6080fe29be45?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTA2fDY5OTYzNzg4fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1532522593358-9e5e2a22f231?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NjN8Njk5NjM3ODh8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1535376472810-5d229c65da09?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDh8Njk5NjM3ODh8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
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