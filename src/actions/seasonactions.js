import { ISLOADING, GET_SEASON_LIST } from '../constants/action-types';
import axios from 'axios';
import config from '../config';
export const isLoading = bool => ({
    type: ISLOADING,
    isLoading: bool

})
export const getSeasonList = seasons => ({
    type: GET_SEASON_LIST,
    seasons
})


export const getSeasons = () => {
    return (dispatch) => {
        dispatch(isLoading(true));
        axios.get(config.API_URL + 'seasons.json?limit=11&offset=55')
            .then((response) => {
                dispatch(isLoading(false));
                if (typeof response.data && response.data.MRData) {
                    dispatch(getSeasonList(response.data.MRData.SeasonTable))
                }
                else {
                    dispatch(getSeasonList([]));
                }

            }).catch(error => {
                dispatch(isLoading(false));
            });
    }
}

