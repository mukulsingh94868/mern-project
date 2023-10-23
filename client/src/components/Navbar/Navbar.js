import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Memories from '../../assets/memories.png';
import useStyles from './styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

const Navbar = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location  = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
        dispatch({
            type: 'LOGOUT',
        });
        navigate('/');
        setUser(null);
        window.location.reload();
    };

    useEffect(() => {
        const token = user?.token;
        if(token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <div className={classes.brandContainer}>
                    <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
                    <img className={classes.image} src={Memories} alt="icon" height="60" />
                </div>

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