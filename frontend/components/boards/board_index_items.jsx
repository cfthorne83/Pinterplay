import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component {
    constructor(props){
        super(props);


    }

    // componentDidMount() {
    //     pins = this.props.fetchPins(this.props.board);
    // }

    // componentDidUpdate(prevProps) {

    //     if (this.props.board !== prevProps.board){
    //         this.props.fetchPins(this.props.board);
    //     }
    // }

    image(pin) {
        if (pin) {
            return <img className="one" src={pins[0].image_url} alt=""/>
        }
    }

    render() {

        const {board} = this.props;

        let pins = this.props.fetchPins(board);
        debugger
        // if (pins.length === 0) return null;
        // const pins =  Object.values(this.props.pins);

        // let pinDivs = [0, 1, 2].map( i => {
        //     if (pins[i]){
        //         return (
        //             <img 
        //                 className={`p${i}`}
        //                 src={pins[i].image_url} 
        //                 alt=""/>
        //             // <div>{pins[i].title}</div>
        //         );
        //     } else {
        //         return (
        //             <div className={`p${i}`}></div>
        //         );
        //     }
        // });

        // let pinTitle;
        // if (pins.length !== 0) {
        //     pinTitle = pins[0].title;
        // }

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

                    <h1>{board.title}</h1>
                    {/* <h1>{pinTitle}</h1> */}
                </Link>
            </li>
        )
    }
}

export default BoardIndexItem;