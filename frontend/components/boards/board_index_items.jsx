import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {pins: []}
    }

    componentDidMount() {
        let that = this;
        [0, 1, 2].forEach( i => {
            // debugger
            $.ajax({
                url: `/api/pins/${that.props.board.pins[i].id}`
            }).then(
                (response) => {
                    console.log(response.pin.image_url);
                }
            )
        })
    }

    render() {

        // if (this.props.board.pins.length !== 0 && !this.props.pin){
        //     return null;
        // }

        const {board} = this.props;
        const pins = this.props.pins || [];
        // let pinDivs;
        
        //     pinDivs = [0, 1, 2].map( i => {
        //         if (pins && pins.length >= 3){
        //             return (
        //                 <img 
        //                     className={`p${i}`}
        //                     src={pins[i].image_url} 
        //                     alt=""/>
        //             );
        //         } else {
        //             return (
        //                 <div className={`p${i}`}></div>
        //             );
        //         }
        //     });
         
        return (
            <li key={board.id}>
                <Link key={`${board.id}`} to={`/boards/${board.id}`}>
             
                    {/* <div className="outer">
                            {pinDivs[0]}
                        <div className="inner">
                            {pinDivs[1]}
                            {pinDivs[2]}
                        </div>
                    </div> */}
                    {/* <h1>{pins[0].image_url}</h1> */}
                    {/* <img src={`${pins[0].image_url}`} alt=""/> */}

                    <h1>{board.title}</h1>
                    <h2>{pins.length} Pins</h2>
                </Link>
            </li>
        )
    }
}

export default BoardIndexItem;