import React from 'react';
import { Box ,makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const useStyles = makeStyles({
    container: {
        position: 'relative',
        width: '100%',
        paddingTop: '100%' /* 1:1 Aspect Ratio */,
    },

    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        // objectFit: 'cover',
    },
});

const ResponsiveImage = ({ src, exClassName }) => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <img src={src} className={classNames(classes.image, exClassName)} alt="" />
        </Box>
    );
};

ResponsiveImage.propTypes = {
    src: PropTypes.string,
    exClassName: PropTypes.string,
};

export default ResponsiveImage;
