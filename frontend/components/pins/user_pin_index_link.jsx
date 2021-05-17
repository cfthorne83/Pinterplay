import React from 'react';
import { Link } from 'react-router-dom';

class UserPinIndexLink extends React.Component {
    constructor(props){
        super(props);

        this.state = { pinsImages: null }
    }

    componentDidMount() {
        let {userId} = this.props;
        const that = this;
        // if (this.props.board.pins){
                $.ajax({
                    url: `/api/pins`,
                    method: "GET",
                    data: {
                            limit: true,
                            user_id: userId
                    }
                }).then(
                    (response) => {
                        // arr.push(response.pin.image_url);
                        that.setState({ pinsImages: [response] })
                    }
                )
        // }
    }

    render() {
        const {userId} = this.props;
        // const pins = board.pins;

        // if (!this.state.pinsImages) {
        //     return null;
        // }
        
        const pinDivs = [0, 1, 2].map( i => {
                if (this.state.pinsImages && this.state.pinsImages[0][i]){
                    const pin = this.state.pinsImages[0][i]
                    return (
                        <img 
                            className={`p${i}`}
                            src={pin.image_url} 
                            alt=""/>
                    );
                } else {
                    return (
                        <div className={`p${i}`}></div>
                    );
                }
            });

            return (
            <li key={userId}>
                <Link key={`${this.props.userId}`} to={`/users/${userId}/pins`}>
             
                    <div className="outer">
                            {pinDivs[0]}
                        <div className="inner">
                            {pinDivs[1]}
                            {pinDivs[2]}
                        </div>
                    </div>

                    <h1>All Pins</h1>
                </Link>
            </li>
        )
    }
}

export default UserPinIndexLink;