import { AppBar, Button, Container, Grid, Grow, Paper, TextField } from '@mui/material';
import React, { useState } from 'react'
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Paginate from '../Pagination';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import ChipInput from 'material-ui-chip-input'
import { getPostsBySearch } from '../../actions/posts';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const query = useQuery();

    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    // useEffect(() => {
    //   dispatch(getPosts);
    // }, [currentId, dispatch])

    const searchPost = () => {
        if (search?.trim() || tags) {
            dispatch(getPostsBySearch({ search, tags: tags?.join(',') }));
            navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags?.join(',') || 'none'}`);
        } else {
            navigate('/posts')
        }
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchPost();
        }
    };

    const handleAdd = (tag) => {
        setTags([...tags, tag]);
    };

    const handleDelete = (tagToDelete) => {
        setTags(tags.filter((tag) => tag !== tagToDelete));
    };

    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                    <Grid item xs={8} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={4} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position='static' color='inherit'>
                            <TextField
                                name="search"
                                variant='outlined'
                                label="Search Memories"
                                fullWidth
                                value={search}
                                onKeyPress={handleKeyPress}
                                onChange={(e) => { setSearch(e.target.value) }}
                            />
                            <ChipInput
                                value={tags}
                                style={{ margin: '10px 0px' }}
                                label="Search Tags"
                                variant='outlined'
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                            />
                            <Button onClick={searchPost} variant='contained' className={classes.searchButton} color='primary'>Search</Button>
                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        <Paper elevation={6}>
                            <Paginate page={page} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;