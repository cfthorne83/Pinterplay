import React, { useDebugValue } from 'react';

class BoardDropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = { show: true, board_id: "" }

        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.updateBoard = this.updateBoard.bind(this);
    }

    handleClick(e){
        e.stopPropagation();
        this.setState({ show: !this.state.show });
    }

    handleBlur(){
        window.setTimeout(() => {
            this.setState({ show: false })
        }, 100);
    }

    updateBoard(e) {
        let board = document.querySelector(".selected-board");
        let button = document.querySelector(".board-dropdown-input");

        board.innerText = e.currentTarget.value;
        board.setAttribute("data-id", e.currentTarget.dataset.id);
    }

    render() {

        let firstBoard;
        let firstId;
        let pin;

        let boards = this.props.boards.map( (board, i) => {
            if (i === 0) {
                firstBoard = board.title;
                firstId = board.id;
            }
            // pin = board.pins[0].title;

            return (
                <li>
                    <input
                        key={board.id} 
                        type="submit" 
                        className="board-dropdown-input"
                        data-id={board.id} 
                        value={board.title}
                        onClick={this.updateBoard}
                    />
                </li>
            )
        })


        return (
            // <div>
                <button 
                    className='board-drop'
                    // onClick={this.handleClick} 
                    // onBlur={this.handleBlur}
                    >
        
                    <span className="board-drop__select">
                        <p data-id={firstId} className="selected-board">{firstBoard}</p>
                        <img className='board-drop__img' src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/dropdown_arrow-512.png" alt=""/>
                    </span>
    
                        {this.state.show && (
                            <div className='board-drop__inner'>   
                                <h2>All boards</h2>     
                                <ul>{boards}</ul> 
                            </div>
                        )}
                </button>
            // </div>

            
        )
    }
}

export default BoardDropdown;