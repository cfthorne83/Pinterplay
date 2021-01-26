import React from 'react';

class BoardShow extends React.Component {

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId)
    }

    render() {

        // let pins = this.props.board.pins.map((pin, i) => {
        //     return <li>{pin.photo.attached}</li>
        // })

        return (
            <div>
                <p>{this.props.board.title}</p>
                <p>{this.props.board.description}</p>
                {/* <ul>{pins}</ul> */}
            </div>
        );

    }
}

export default BoardShow; 