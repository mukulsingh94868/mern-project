import { Container, Grid, Grow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';

const Home = () => {
    // const classes = useStyles();
    const dispatch = useDispatch();
  
    const [currentId, setCurrentId] = useState(null);
  
  
    // useEffect(() => {
    //   dispatch(getPosts);
    // }, [currentId, dispatch])
    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={8} sm={8}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;