import { AUTH } from "../constants/actionTypes";
import * as api from '../api'
import toast from "react-hot-toast";

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        toast.success('Successfully Login!', { duration: 2000 });
        navigate('/posts');
    } catch (error) {
        console.error(error.message)
    }
};


export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data });
        toast.success('Successfully Register!', { duration: 2000 });
        navigate('/posts');
    } catch (error) {
        console.error(error.message)
    }
};
