import { ISLOADING, GET_SEASON_LIST, GET_SEASON_WINNERS, GET_SEASON_CHAMPION } from '../constants/action-types';
import axios from 'axios';
import config from '../config';
import toastr from 'toastr';
export const isLoading = bool => ({
    type: ISLOADING,
    isLoading: bool

});
export const getSeasonList = seasons => ({
    type: GET_SEASON_LIST,
    seasons
});
export const getWinnersList = winners => ({
    type: GET_SEASON_WINNERS,
    winners
});
export const getChampionData = champion => ({
    type: GET_SEASON_CHAMPION,
    champion
});


export const getSeasons = () => {
    return (dispatch) => {
        dispatch(isLoading(true));
        let url = `${config.API_URL}/seasons.json?limit=11&offset=55`;
        axios.get(url)
            .then((response) => {
                dispatch(isLoading(false));
                if (typeof response.data && response.data.MRData) {
                    dispatch(getSeasonList(response.data.MRData.SeasonTable))
                }
                else {
                    dispatch(getSeasonList([]));
                }

            }).catch(error => {
                toastr.error(error);
                dispatch(isLoading(false));
            });
    }
}
export const getWinners = (season) => {
    return (dispatch) => {
        dispatch(isLoading(true));
        let url = `${config.API_URL}/${season}/results/1.json`;
        axios.get(url)
            .then((response) => {
                dispatch(isLoading(false));
                if (typeof response.data && response.data.MRData) {
                    dispatch(getWinnersList(response.data.MRData.RaceTable.Races))
                }
                else {
                    dispatch(getWinnersList([]));
                }
            }).catch(error => {
                toastr.error(error);
                dispatch(isLoading(false));
            });
    }
}
export const getChampion = (season) => {
    return (dispatch) => {
        dispatch(isLoading(true));
        let url = `${config.API_URL}/${season}/driverstandings/1.json`;
        axios.get(url)
            .then((response) => {
                dispatch(isLoading(false));
                if (typeof response.data && response.data.MRData && response.data.MRData.StandingsTable) {
                    dispatch(getChampionData(response.data.MRData.StandingsTable.StandingsLists));
                }
                else {
                    dispatch(getChampionData([]));
                }
            }).catch(error => {
                toastr.error(error);
                dispatch(isLoading(false));
            });
    }
}

