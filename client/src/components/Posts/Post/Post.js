import React from 'react';
import useStyles from './styles';
import { Button, Card, CardContent, CardMedia, Typography, CardActions, ButtonBase } from '@mui/material';
import moment from 'moment/moment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Link, useNavigate } from 'react-router-dom';


const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('profile'));

  const handleDelete = (id) => {
    dispatch(deletePost(id));
    window.location.reload();
  };

  const handleLikePost = (id) => {
    dispatch(likePost(id))
  };

  const Likes = () => {
    if (post?.likes?.length > 0) {
      return post?.likes?.find((like) => like === user?.result?._id) ?
        (
          <><ThumbUpAltIcon fontSize='small' />&nbsp; {post?.likes?.length > 2 ? `You and ${post?.likes?.length - 1} others ` : `${post?.likes?.length} like ${post?.likes?.length > 1 ? 's' : ''}`} </>
        ) : (
          <><ThumbUpOffAltIcon fontSize='small' />&nbsp; {post?.likes?.length} {post?.likes?.length === 1 ? 'Like' : 'likes'} </>
        )
    }
    return <><ThumbUpOffAltIcon fontSize='small' />&nbsp; Like</>
  };

  const openPost = () => {
    navigate(`/posts/${post?._id}`);
  };

  return (
    <>
      <Card className={classes.card} raised elevation={6}>
        {/* <ButtonBase
          component="span"
          name="test"
          className={classes.cardAction}
          onClick={openPost}
        > */}
        <Link to={`/posts/${post?._id}`} className={classes.cardAction} style={{ textDecoration: 'none' }}>
          <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
          <div className={classes.overlay}>
            <Typography variant="h6">{post.name}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
          </div>
          {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
            <div className={classes.overlay2} name="edit">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentId(post._id);
                }}
                style={{ color: 'white' }}
                size="small"
              >
                <MoreHorizIcon fontSize="default" />
              </Button>
            </div>
          )}
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
          </div>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{post.message.split(' ').splice(0, 20).join(' ')}...</Typography>
          </CardContent>
          {/* </ButtonBase> */}
        </Link>


        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
            <Likes />
          </Button>
          {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
            <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
              <DeleteIcon fontSize="small" /> &nbsp; Delete
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  )
}

export default Post;