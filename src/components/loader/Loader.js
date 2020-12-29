import React from 'react';
import classNames from 'classnames';
import { images } from '../../assets/images';
import { loaderSelector, messageSelector } from '../../redux/selectors/uiSelector';
import { useSelector } from 'react-redux';
import './style.css';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(({
    message:{
        fontSize: '1rem',
        fontWeight: 600
    }
}))

const Loader = ({ initial = false }) => {
    const classes = useStyles();
    const loader = useSelector(loaderSelector);
    const messages = useSelector(messageSelector);

    if (initial || loader) {
        return (
            <div className={classNames('loaderWrapper', 'loaderWrapperBg')}>
                <img src={images.loader} alt="" />
                {messages && messages.map((item, i) => <Typography key={i} className={classes.message}>{item}</Typography>)}
            </div>
        );
    } else {
        return <></>;
    }
};

Loader.propTypes = {
    initial: PropTypes.bool,
};

export default Loader;
