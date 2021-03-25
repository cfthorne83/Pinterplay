import React from 'react';

class BoardDropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = { show: false, board_id: "" }

        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.updateBoard = this.updateBoard.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoards();
    }

    handleClick(){
        this.setState({ show: !this.state.show });
        console.log(this.state);
    }

    handleBlur(){
        window.setTimeout(() => {
            this.setState({ show: false })
        }, 100);
    }

    updateBoard(e) {
        let board = document.querySelector(".selected-board");
        // let butt = document.querySelector(".board-dropdown-input");
        board.innerText = e.currentTarget.value;
        // board.innerText = butt.dataset.id;
    }

    render() {

        let firstBoard;
        let boards = this.props.boards.map( (board, i) => {
            if (i === 0) {
                firstBoard = board.title
            }
            return (
                // <option key={board.id} value={board.title}> 
                //     {board.title}
                // </option>
                <li className="board-dropdown-btn" data-columns="3" key={board.id}>
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
                    <p className="selected-board">{firstBoard}</p>
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