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
        let userId = this.props.userId.id;
        if (this.props.board.pins){
            // [0, 1, 2].forEach( i => {
            //     if (that.props.board.pins[i])
                $.ajax({
                    url: `/api/pins`,
                    method: "GET",
                    data: {
                            limit: true,
                            user_id: userId
                    }
                }).then(
                    (response) => {
                        // arr.push(response.pin.image_url);
                        that.setState({ pinsImages: response })
                    }
                )
            // })
        }
    }

    render() {
        console.log(this.state)
        const {board} = this.props;
        const pins = board.pins;

        if (!board.pins) {
            return null;
        }
        
        // const pinDivs = [0, 1, 2].map( i => {
        //         if (pins && pins[i]){
        //             return (
        //                 <img 
        //                     className={`p${i}`}
        //                     src={this.state.pinsImages[i]} 
        //                     alt=""/>
        //             );
        //         } else {
        //             return (
        //                 <div className={`p${i}`}></div>
        //             );
        //         }
        //     });
        const pinDivs = [0, 1, 2].map( i => {
                if (pins && pins[i]){
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
                    {/* <h2>{pins.length} Pins</h2> */}
                    <h1>{this.props.first}</h1>
                </Link>
            </li>
        )
    }
}

export default BoardIndexItem;