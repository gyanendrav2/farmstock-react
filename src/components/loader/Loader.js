import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { images } from '../../assets/images';

const useStyles = makeStyles(({
    wrapper:{
        height: '100vh'
    },
    image:{
        width: '5rem',

    }
}))

const Loader = () => {
    const classes = useStyles();
    return (
        <Grid container alignItems="center" justify="center" className={classes.wrapper}>
            <img src={images.loader} className={classes.image} />
        </Grid>
    );
}

export default Loader;
