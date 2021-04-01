import React from 'react';

class BoardDropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = { show: false, board_id: "" }

        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.updateBoard = this.updateBoard.bind(this);
    }

    handleClick(){
        this.setState({ show: !this.state.show });
    }

    handleBlur(){
        window.setTimeout(() => {
            this.setState({ show: false })
        }, 100);
    }

    updateBoard(e) {
        // debugger
        let board = document.querySelector(".selected-board");
        let button = document.querySelector(".board-dropdown-input");

        board.innerText = e.currentTarget.value;
        board.setAttribute("data-id", e.currentTarget.dataset.id);
    }

    render() {
        // debugger
        let firstBoard;
        let firstId;
        let boards = this.props.boards.map( (board, i) => {
            if (i === 0) {
                firstBoard = board.title;
                firstId = board.id;
            }
            return (
                <li 
                    className="board-dropdown-btn" 
                    key={board.id}>
                        <input 
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
            <button 
                className='dropdown-outer'
                onClick={this.handleClick} 
                onBlur={this.handleBlur}
                >
    
                <span>
                    <p data-id={firstId} className="selected-board">{firstBoard}</p>
                    <img className='dropdown-icon' src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/dropdown_arrow-512.png" alt=""/>
                </span>

                    {this.state.show && (
                        <div className='dropdown-inner'>        
                            <ul>{boards}</ul> 
                        </div>
                    )}

            </button>
            
        )
    }
}

export default BoardDropdown;