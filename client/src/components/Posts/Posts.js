import React, { useEffect, useState } from 'react'
import Post from './Post/Post';
import useStyles from './styles';
import { CircularProgress, Grid } from '@mui/material';

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const [posts, setPosts] = useState(null);

  useEffect(() => {

    const getData = async () => {
      const response = await fetch('http://localhost:5000/posts');
      const result = await response.json();
      setPosts(result);
    };

    getData();
  }, [])

  // const posts = useSelector((state) => state.posts);

  return (
    <div className={classes.post}>
      {!posts?.length ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6} md={6}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default Posts