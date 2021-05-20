import { connect } from 'react-redux';

import { searchInput } from '../../actions/search_actions';
import Searchbar from './searchbar';

const msp = (state, ownProps) => {
    return {
    };
};

const mdp = (dispatch, ownProps) => {
    return {
        searchInput: (input) => dispatch(searchInput(input)),
    };
};

export default connect(msp, mdp)(Searchbar);