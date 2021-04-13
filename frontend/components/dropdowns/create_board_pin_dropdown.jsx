import React from 'react';

class CreateDropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = { show: false }

        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleBoard = this.handleBoard.bind(this);
    }

    handleClick(){
        this.setState({ show: !this.state.show })
    }

    handleBlur(){
        window.setTimeout(() => {
            this.setState({ show: false })
        }, 100);
    }

    handleBoard(e){
        this.props.openModal('createBoard');
    }

    render() {

        return (
            <button 
                className='board-pin-drop__outer'
                onClick={this.handleClick} 
                onBlur={this.handleBlur}
                >

                <div className="board-pin-drop__img-con">
                    <img src="/images/plus-icon.png" alt=""/>
                </div>

                    {this.state.show && (
                        <div className='board-pin-drop__inner'>         
                            <h1>Create</h1>     
                            <button 
                                onClick={this.handleBoard}>
                                Board
                            </button> 
                            <button >
                                Pin
                            </button>                              
                
                        </div>
                    )}
            </button>
            
        );
    }
}

export default CreateDropdown;