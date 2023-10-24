import React, { useEffect, useState } from 'react'
import Post from './Post/Post';
import useStyles from './styles';
import { CircularProgress, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  // const [posts, setPosts] = useState(null);

  // useEffect(() => {

  //   const getData = async () => {
  //     const response = await fetch('http://localhost:5000/posts');
  //     const result = await response.json();
  //     setPosts(result?.data);
  //   };

  //   getData();
  // }, [])

  const { posts, isLoading } = useSelector((state) => state.posts);

  if (!posts.length && !isLoading) return 'No posts';

  return (
    isLoading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts?.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
}

export default Posts