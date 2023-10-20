import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Input = ({ name, half, handleChange, label, autoFocus, type, hanldeShowPassword }) => {
    return (
        <>
            <Grid item xs={6} sm={half ? 6: 12}>
                <TextField 
                    name={name}
                    onChange={handleChange}
                    variant='outlined'
                    required
                    fullWidth
                    label={label}
                    autoFocus={autoFocus}
                    type={type}
                    InputProps={name === 'password' ? {
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton onClick={hanldeShowPassword}>
                                    {type === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon /> }
                                </IconButton>
                            </InputAdornment>
                        )
                    } : null}
                />
            </Grid>
        </>
    )
}

export default Input;