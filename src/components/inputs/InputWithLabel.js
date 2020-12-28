import { Box, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Input from '.';
import { colors } from '../../theme/colors';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import cn from 'classnames';

const useStyles = makeStyles({
    container: {
        marginBottom: '0.5rem',
    },
    wrapper: {
        width: '100%',
    },
    label: {
        marginBottom: '0.5rem',
        fontSize: '0.85rem',
        fontWeight: 400,
        width: '100%',
    },
    input: {
        width: '100%',
        '& ::placeholder': {
            color: colors.primary,
            opacity: 1,
            fontSize: '0.75rem',
        },
    },
    border: (props) => (props.error ? `solid 1px ${colors.red}` : `solid 1px ${colors.primary}`),
    '&:focus': {
        borderColor: (props) => (props.error ? colors.red : colors.primary),
    },
    '&:hover': {
        borderColor: (props) => (props.error ? colors.red : colors.primary),
    },
    red: {
        color: colors.red,
    },
});

const InputWithLabel = ({ label, inputRegister, error, iscompulsory, errorMsg, ...props }) => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Typography className={classes.label}>
                {label} {iscompulsory && <span className={cn({ [classes.red]: error })}>*</span>}
            </Typography>
            <Input error={error} inputRegister={inputRegister} {...props} />
            {iscompulsory == true ? <ErrorMessage errorMsg={errorMsg} /> : null}
        </Box>
    );
};

InputWithLabel.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    inputRegister: PropTypes.any,
    errorMsg: PropTypes.string,
    iscompulsory: PropTypes.bool,
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
};
export default InputWithLabel;