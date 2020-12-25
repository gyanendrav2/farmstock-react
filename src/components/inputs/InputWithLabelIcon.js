import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import Input from '.';
import PropTypes from 'prop-types';
import React from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import colors from '../colors';

const useStyles = makeStyles({
    wrapper: {
        width: '100%',
        padding: ' 0 0.5rem',
        outline: 'none',
        margin: 0,
        fontSize: '0.85rem',
        fontWeight: 400,
        borderRadius: '0.5rem',
        backgroundColor: colors.white,
        fontFamily: 'aino-regular',
        border: (props) => (props.error ? `solid 1px ${colors.red}` : `solid 1px ${colors.blueLight1}`),
        '&:focus': {
            borderColor: (props) => (props.error ? colors.red : colors.blue),
        },
        '&:hover': {
            borderColor: (props) => (props.error ? colors.red : colors.blue),
        },
    },
    iconContainer: {
        width: '10%',
        '& svg':{
          color: (props) => (props.error ? colors.red : colors.blueLight1),
        }
    },
    label: {
        marginBottom: '0.5rem',
        fontSize: '0.85rem',
        fontWeight: 400,
    },
    inputContainer: {
        width: '100%',
    },
    input: {
        width: '100%',
        fontFamily: 'aino-regular',
        border: 'none',
        '& ::placeholder': {
            color: (props) => (props.error ? `solid 1px ${colors.red}` : `solid 1px ${colors.blueLight1}`),
            opacity: 1,
            fontSize: '0.75rem',
        },
    },
});

const InputWithLabelIcon = ({ label, error, icon, inputRegister, errorMsg, name, ...props }) => {
    const classes = useStyles({ error: errorMsg?.message ? true : false });
    console.log('errorMsg', error);
    return (
        <Box>
            <Typography className={classes.label}>{label}</Typography>
            <Grid
                container
                alignItems="center"
                justify="center"
                wrap="nowrap"
                component="div"
                tabIndex="0"
                className={classes.wrapper}
            >
                <Box className={classes.inputContainer}>
                    <Input
                        error={errorMsg?.message ? true : false}
                        inputRegister={inputRegister}
                        name={name}
                        {...props}
                        className={classes.input}
                    />
                </Box>
                <Grid container alignItems="center" justify="center" className={classes.iconContainer}>
                    {icon}
                </Grid>
            </Grid>
            <ErrorMessage error={errorMsg} />
        </Box>
    );
};

InputWithLabelIcon.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.element,
    inputRegister: PropTypes.element,
    name: PropTypes.string,
    errorMsg: PropTypes.object,
};
export default InputWithLabelIcon;
