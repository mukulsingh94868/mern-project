import React, { useState } from 'react';
import useStyles from './styles';
import { Avatar, Button, Container, Grid, Paper, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';
// import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            dispatch(signup(formData, navigate));
        } else {
            dispatch(signin(formData, navigate));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const hanldeShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const switchMode = () => {
        setFormData(initialState);
        setIsSignUp((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    // const googleSuccess = async (res) => {
    //     const result = res?.profileObj;
    //     const token = res?.tokenId;

    //     try {
    //         dispatch({
    //             type: 'AUTH',
    //             data: { result, token }
    //         })
    //         navigate('/posts');
    //     } catch (error) {
    //         console.log('error', error);
    //     }
    // };

    // const googleFailure = (error) => {
    //     if (error.error === 'popup_closed_by_user') {
    //         // Handle this situation accordingly, e.g., show a message to the user.
    //     } else {
    //         console.log('Login error:', error);
    //         // Handle other login errors.
    //     }
    // };
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

                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
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

                        {/* <GoogleLogin
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
                        /> */}

                        <Grid container justify="flex-end">
                            <Grid item>
                                <Button onClick={switchMode} className={classes.buttonAccount}>
                                    {
                                        isSignup
                                            ?
                                            <Typography>
                                                Already have an account?
                                                <span className={classes.spanTag}> Sign In</span>
                                            </Typography>
                                            :
                                            <Typography>
                                                Don't have an account?
                                                <span className={classes.spanTag}> Sign Up</span>
                                            </Typography>
                                    }
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