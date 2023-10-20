import React, { useState } from 'react';
import useStyles from './styles';
import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux';

const Auth = () => {
    const classes = useStyles();
    const state = null;
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignUp] = useState(false);

    const handleSubmit = () => {

    };

    const handleChange = () => { };

    const hanldeShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const switchMode = () => {
        setIsSignUp((prevSignup) => !prevSignup);
        hanldeShowPassword(false);
    };

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({
                type: 'AUTH',
                data: { result, token }
            })
        } catch (error) {
            console.log('error', error);
        }
    };

    const googleFailure = (error) => {
        console.log('error', error);
        console.log('google failure ! Try again later');

        if (error.error === 'popup_closed_by_user') {
            console.log('Google Sign-In popup was closed by the user.');
            // Handle this situation accordingly, e.g., show a message to the user.
        } else {
            console.log('Login error:', error);
            // Handle other login errors.
        }
    };
    return (
        <>
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign in'}</Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {isSignup && (
                                <>

                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />

                                    <Input name="firstName" label="First Name" handleChange={handleChange} half />
                                </>
                            )}
                            <Input name="email" label="email address" handleChange={handleChange} type="email" />
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} hanldeShowPassword={hanldeShowPassword} />

                            {
                                isSignup &&
                                <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />
                            }
                        </Grid>

                        <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                            {isSignup ? "Sign Up" : "Sign In"}
                        </Button>

                        <GoogleLogin
                            style={{ marginTop: '10px' }}
                            clientId='781543854789-2v6fcg5lcjdsj5ac8qrpo1kgi6mn1sfa.apps.googleusercontent.com'
                            render={(renderProps) => (
                                <Button
                                    className={classes.googleButton}
                                    color='primary'
                                    fullWidth
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    startIcon={<LockOutlinedIcon />}
                                    variant='contained'
                                >
                                    Google Sign In
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            // cookiePolicy='single_host_origin'
                            cookiePolicy={'single_host_origin'}
                        />

                        <Grid container justify="flex-end">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignup ? "Already have an account ? Sign In" : "Don't have an account ? Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </>
    )
}

export default Auth