import axios from 'axios';
import { FETCH_USER } from './types';

const BASE_URI_API = process.env.REACT_APP_URI_API_BASE;

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get(`${BASE_URI_API}/api/current_user`);
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
    const res = await axios.post(`${BASE_URI_API}/api/stripe`, token);
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values) => async (dispatch) => {
    const res = await axios.post(`${BASE_URI_API}/api/surveys`, values);

    dispatch({type: FETCH_USER, payload: res.data})
};
