import React from 'react';

class BoardDropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = { show: false, board: "" }

        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
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
                <li key={board.id}>
                    <input 
                        type="submit" 
                        value={board.title}
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
                    <p>{firstBoard}</p>
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