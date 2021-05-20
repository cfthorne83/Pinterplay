import { connect } from 'react-redux';

import { fetchPins } from '../../actions/pin_actions';
import { searchInput } from '../../actions/search_actions';
import Searchbar from './searchbar';

const msp = (state, ownProps) => {
    return {
        pins: state.entities.pins
    };
};

const mdp = (dispatch, ownProps) => {
    return {
        fetchPins: () => dispatch(fetchPins()),
        searchInput: (input) => dispatch(searchInput(input)),
    };
};

export default connect(msp, mdp)(Searchbar);