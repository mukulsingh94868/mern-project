import { AUTH } from "../constants/actionTypes";
import * as api from '../api'

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        navigate('/');
    } catch (error) {
        console.error(error.message)
    }
};


export const signup = (formData, navigate) => async (dispatch) => {
    try {
        navigate('/');
    } catch (error) {
        console.error(error.message)
    }
};