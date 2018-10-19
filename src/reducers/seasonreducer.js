import { ISLOADING, GET_SEASON_LIST, GET_SEASON_WINNERS, GET_SEASON_CHAMPION } from '../constants/action-types';
const getInitialState = () => ({
    seasons: [],
    winners: [],
    champion: [],
    isLoading: false,
  });
const seasonReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case ISLOADING:
            return { ...state, isLoading: action.isLoading };
        case GET_SEASON_LIST:
            return { ...state, seasons: action.seasons };
        case GET_SEASON_WINNERS:
            return { ...state, winners: action.winners };
        case GET_SEASON_CHAMPION:
            return { ...state, champion: action.champion };
        default:
            return state;
    }
}
export default seasonReducer;