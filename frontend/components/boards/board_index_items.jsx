import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component {

    componentDidMount() {
        this.props.fetchPins(this.props.board);
    }

    render() {

        const {board} = this.props;

        return (
            <li key={board.id}>
                <Link key={`${board.id}`} to={`/boards/${board.id}`}>

                    <div className="outer">
                        <div className="one"></div>
                        <div className="inner">
                            <div className="two"></div>
                            <div className="three"></div>
                        </div>
                    </div>

                    <h1>{board.title}</h1>

                </Link>
            </li>
        )
    }
}

export default BoardIndexItem;