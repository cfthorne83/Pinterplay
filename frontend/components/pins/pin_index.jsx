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
                        <img  src="https://images.unsplash.com/photo-1520985244272-9d0b8067a4ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHNreXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
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
                        <img  src="https://images.unsplash.com/photo-1517776832751-0a7e6993de03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1517923505553-0e984c9b1eed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1579783902915-f0b0de2c2eb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1506813561347-cbbdf7b3f520?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTEwfDY5OTYzNzg4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1520642197828-b053b701d590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Njd8Njk5NjM3ODh8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1587947910798-fb4e9a0452cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHBpbmslMjBza3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    {/* <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1520985244272-9d0b8067a4ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHNreXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div> */}
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