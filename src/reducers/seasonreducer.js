import { ISLOADING,GET_SEASON_LIST } from '../constants/action-types';
const initialState = [];
const seasonReducer = (state = initialState, action) => {
    switch (action.type) {
        case ISLOADING:
            return { ...state, isLoading: action.isLoading };
        case GET_SEASON_LIST:
            return { ...state, seasons: action.seasons };
        default:
            return state;
    }
}
export default seasonReducer;