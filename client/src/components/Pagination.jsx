import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { Pagination, PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';

const Paginate = ({ page }) => {
    const [numberPages, setNumberPages] = useState(null);
    // const { numberOfPages } = useSelector((state) => state.posts);
    const classes = useStyles();

    useEffect(() => {

        const getData = async () => {
            const response = await fetch(`http://localhost:5000/posts?page=${page}`);
            const result = await response.json();
            setNumberPages(result?.numberOfPage);
        };
        if (page) {
            // dispatch(getPosts(page))
            getData();
        }

    }, [page])
    return (
        <>
            <Pagination
                classes={{ ul: classes.ul }}
                count={!!numberPages ? numberPages : 0}
                page={Number(page) || 1}
                color='primary'
                variant='outlined'
                renderItem={(item) => (
                    <PaginationItem {...item} component={Link} to={`/posts?page=${item?.page}`} />
                )}
            />
        </>
    )
}

export default Paginate;