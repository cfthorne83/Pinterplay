import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component {
    constructor(props){
        super(props);


    }

    render() {

        const {board} = this.props;
        const pins = board.pins;
        let pinDivs;
        

            pinDivs = [0, 1, 2].map( i => {
                if (pins[i]){
                    debugger
                    return (
                        <img 
                            className={`p${i}`}
                            src={pins[i].image_url} 
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