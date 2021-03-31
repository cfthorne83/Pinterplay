import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component {
    constructor(props){
        super(props);


    }

    componentDidMount() {
        this.props.fetchPins(this.props.board);
    }

    image(pin) {
        if (pin) {
            return <img className="one" src={pins[0].image_url} alt=""/>
        }
    }

    render() {

        const {board, pins} = this.props;

        if (pins.length === 0) return null;

        let pinDivs = [0, 1, 2].map( i => {
            if (pins[i]){
                return (
                    <img 
                        className={`p${i}`}
                        src={pins[i].image_url} 
                        alt=""/>
                    // <div>{pins[i].title}</div>
                )
            } else {
                return (
                    <div className={`p${i}`}></div>
                )
            }
        })

        return (
            <li key={board.id}>
                <Link key={`${board.id}`} to={`/boards/${board.id}`}>

                    <div className="outer">
                            {/* <img className="p0" src={pins[0].image_url} alt=""/> */}
                            {pinDivs[0]}
                        <div className="inner">
                            {/* <div className="p1"></div>
                            <div className="p2"></div> */}
                            {pinDivs[1]}
                            {pinDivs[2]}

                        </div>
                    </div>

                    <h1>{board.title}</h1>
                    {/* <h1>{pinDivs[2]}</h1> */}

                </Link>
            </li>
        )
    }
}

export default BoardIndexItem;