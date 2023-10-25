import React, { useRef, useState } from 'react';
import useStyles from './styles';
import { Button, TextField, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { commentPost } from '../../actions/posts';

const CommentSection = ({ post }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const commentsRef = useRef();

    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState('');

    const user = JSON.parse(localStorage.getItem('profile'));

    const handleClick = async () => {
        const finalComment = `${user?.result?.name} : ${comment}`;
        const newComments = await dispatch(commentPost(finalComment, post?._id));
        setComments(newComments);
        setComment('');

        commentsRef.current.scrollIntoView({ behavior: 'smooth' })
    };
    return (
        <>
            <div>
                <div className={classes.commentsOuterContainer}>
                    <div className={classes.commentsInnerContainer}>
                        <Typography variant='h6' gutterBottom>Comments</Typography>
                        {
                            comments?.map((c, i) => {
                                return (
                                    <Typography key={i} gutterBottom variant='subtitle1'>
                                        <strong>{c?.split(': ')?.[0]}</strong>
                                        {c?.split(':')?.[1]}
                                    </Typography>
                                )
                            })
                        }
                        <div ref={commentsRef} />
                    </div>

                    {
                        user?.result?.name && (
                            <div style={{ width: '70%' }}>
                                <Typography variant='h6' gutterBottom>Write a Comment!</Typography>
                                <TextField
                                    fullWidth
                                    rows={4}
                                    variant='outlined'
                                    multiline
                                    label='Comments'
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />

                                <Button style={{ marginTop: '10px' }} color='primary' fullWidth disabled={!comment} variant='contained' onClick={handleClick}>
                                    Comment
                                </Button>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default CommentSection;