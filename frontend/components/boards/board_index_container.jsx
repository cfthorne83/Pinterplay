import { connect } from 'react-redux';
import BoardIndex from './board_index';
import { fetchBoards, deleteBoard } from '../../actions/board_actions';
import { fetchPins } from "../../util/pin_api_util";


const msp = (state, ownProps) => {
    return { 
        boards: Object.values(state.entities.boards),
        currentUser: state.entities.users[state.session.id]
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchBoards: () => dispatch(fetchBoards())
    }
}

export default connect(msp, mdp)(BoardIndex);