import React from 'react';
import { colors } from '../../theme/colors';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    wrapper: {
        '& input': {
            width: '100%',
            padding: '8px',
            outline: 'none',
            margin: 0,
            fontSize: '1rem',
            fontWeight: 400,
            borderRadius: '8px',
            backgroundColor: colors.white,
            border: (props) => `solid 1px ${props.error ? colors.red : colors.primary}`,
            '&::placeholder': {
                color: (props) => (props.error ? `${colors.red}` : `${colors.primary}`),
                fontSize: '0.75rem',
            },
        },
    },
});

const Input = ({ onChange, inputRegister, error, name, ...rest }) => {
    const classes = useStyles({ error });
    return (
        <Box className={classes.wrapper}>
            <input
                className={classes.input}
                {...rest}
                error={error}
                name={name}
                ref={inputRegister}
                onChange={(e) => {
                    e.preventDefault();
                    onChange && onChange(e.target.value);
                }}
            />
        </Box>
    );
};

Input.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    inputRegister: PropTypes.any,
    name: PropTypes.string,
};

export default Input;
