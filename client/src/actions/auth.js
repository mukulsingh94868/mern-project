import { AUTH } from "../constants/actionTypes";
import * as api from '../api'
import toast from "react-hot-toast";

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        // const { data } = await api.signIn(formData);
        // dispatch({
        //     type: AUTH,
        //     payload: data
        // })
        // toast.success('Successfully Login!', { duration: 2000 });
        // navigate('/posts');

        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        navigate('/posts');
    } catch (error) {
        console.error(error.message)
    }
};


export const signup = (formData, navigate) => async (dispatch) => {
    try {
        // const { data } = await api.signUp(formData);
        // dispatch({
        //     type: AUTH,
        //     payload: data
        // })
        // console.log('hello register')
        // toast.success('Successfully Register!', { duration: 2000 });
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data });
        navigate('/posts');
    } catch (error) {
        console.error(error.message)
    }
};
