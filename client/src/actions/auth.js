import { AUTH } from "../constants/actionTypes";
import * as api from '../api'

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        dispatch({
            type: AUTH,
            payload: data
        })
        navigate('/');
    } catch (error) {
        console.error(error.message)
    }
};


export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({
            type: AUTH,
            payload: data
        })
        navigate('/');
    } catch (error) {
        console.error(error.message)
    }
};