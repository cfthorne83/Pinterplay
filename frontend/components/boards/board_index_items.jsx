import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.state = { pinsImages: [] }
    }

    componentDidMount() {
        let that = this;
        const arr = [];
        // if (this.props.board.pins.length !== 0){
            [0, 1, 2].forEach( i => {
                if (that.props.board.pins[i])
                $.ajax({
                    url: `/api/pins/${that.props.board.pins[i].id}`
                }).then(
                    (response) => {
                        arr.push(response.pin.image_url);
                        that.setState({ pinsImages: arr })
                    }
                )
            })
        // }
    }

    render() {

        // if (this.props.board.pins.length !== 0 && !this.props.pin){
        //     return null;
        // }
        const {board} = this.props;
        const pins = board.pins;
        
        const pinDivs = [0, 1, 2].map( i => {
                if (pins[i]){
                    return (
                        <img 
                            className={`p${i}`}
                            src={this.state.pinsImages[i]} 
                            alt=""/>
                    );
                } else {
                    return (
                        <div className={`p${i}`}></div>
                    );
                }
            });
        return (
            <li key={board.id}>
                <Link key={`${board.id}`} to={`/boards/${board.id}`}>
             
                    <div className="outer">
                            {pinDivs[0]}
                        <div className="inner">
                            {pinDivs[1]}
                            {pinDivs[2]}
                        </div>
                    </div>

                    <h1>{board.title}</h1>
                    <h2>{pins.length} Pins</h2>
                </Link>
            </li>
        )
    }
}

export default BoardIndexItem;