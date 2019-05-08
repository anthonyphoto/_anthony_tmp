import * as actions from '../actions';

const initialState = {
    loading: false,
    error: null,
    data: {}
}

export default function reducer (state = initialState, action) {
    switch(action.type) {

        case actions.FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                error: null
            });

        case actions.FETCH_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.err
            });

        case actions.FETCH_DATA_SUCCESS:
            return Object.assign({}, state, {
                data: action.data,
                loading: false,
                error: null
            });
        
        default:
            return state;
    }

}