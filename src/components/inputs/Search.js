import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
// import Input from '.';
import colors from '../colors';

const useStyles = makeStyles(({
    wrapper:{
        borderRadius: '0.625rem',
        backgroundColor: colors.blueLight2,
        width: '100%',
        height: '2.375rem',
        fontFamily: 'aino-regular',
        fontSize: '0.9rem',
        textAlign: 'center',
        // padding: '0.362rem 0.625rem',
        border: 'none',
        '&::placeholder':{
            color: colors.black
        },
        '&:focus':{
            outline:'none'
        }
    }
}))

const Search = ({...props}) => {
    const classes = useStyles();
    return (
        <input className={classes.wrapper} {...props} />
    );
};


Search.propTypes = {
 placeholder: PropTypes.string,
 onChange: PropTypes.func,
 value: PropTypes.string
};


export default Search;
