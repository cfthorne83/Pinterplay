import React from "react";
import BoardDropdown from "../boards/board_dropdown";

class PinShow extends React.Component {
    constructor(props){
        super(props);

        this.handleGoBack = this.handleGoBack.bind(this);
    }

    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId);
        this.props.fetchBoards();
    }

    // componentDidUpdate(prevProps) {

    //     if (this.props.match.params.pinId !== prevProps.match.params.pinId){
    //         this.props.fetchPin(this.props.match.params.PinId);
    //     }
    // }

    handleGoBack() {
        history.back();
    }

    render() {
        if (!this.props.pin) {
            return null;
        }
        
        return (
            <div className="pin-show">
                <button 
                    className="pin-show__back"
                    onClick={this.handleGoBack}>
                    <img 
                        className="pin-show__back-img"
                        src="/images/back-arrow2.png" 
                        alt="back-arrow"
                        />
                </button>

                <div className="pin-show__inner">
                    <img 
                        className="pin-show__img"
                        src={this.props.pin.image_url} 
                        alt="pin-image"/>

                    <div className="pin-show__text">

                        <img
                            className="pin-show__edit-modal"
                            onClick={()  => {this.props.openModal("editPin", this.props.pin.id)}} 
                            src="https://static.thenounproject.com/png/384290-200.png" 
                            alt="edit-form-link"/>

                        <BoardDropdown boards={this.props.boards}/>

                        <h1>{this.props.pin.title}</h1>
                    </div>
                </div>

            </div>
        )
    }
}

export default PinShow;