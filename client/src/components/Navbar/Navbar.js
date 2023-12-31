import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import MemoriesCamera from '../../assets/memoriesCamera.png';
import MemoriesText from '../../assets/memoriesText.png';
import useStyles from './styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';

const Navbar = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = useCallback(() => {
        dispatch({ type: actionType.LOGOUT });
        navigate('/auth');
        setUser(null);
    }, [dispatch, navigate]);

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location, user?.token, logout]);

    return (
        <>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Link to="/posts" className={classes.brandContainer}>
                    <img className={classes.image} src={MemoriesText} alt="icon" height="45" />
                    <img className={classes.image} src={MemoriesCamera} alt="icon" height="40" />
                </Link>

                <Toolbar className={classes.toolbar}>
                    {
                        user ? (
                            <div className={classes.profile}>
                                <Avatar className={classes.purple} alt={user?.result?.name} src={user?.result?.imageUrl}>{user?.result?.name?.charAt(0)}</Avatar>
                                <Typography className={classes.userName} variant='h6'>{user?.result?.name}</Typography>
                                <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Logout</Button>
                            </div>
                        ) : (
                            <div>
                                <Button component={Link} to="/auth" variant='contained' color='primary'>Sign In</Button>
                            </div>
                        )
                    }
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Navbar;