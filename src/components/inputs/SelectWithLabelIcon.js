import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { colors } from '../../theme/colors';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import cn from 'classnames';

const useStyles = makeStyles({
    container: {
        marginBottom: '0.5rem',
    },
    wrapper: {
        width: '100%',
        padding: ' 0 8px',
        outline: 'none',
        margin: 0,
        fontSize: '16px',
        fontWeight: 400,
        borderRadius: '8px',
        backgroundColor: colors.white,
        border: (props) => (props.error ? `solid 1px ${colors.red}` : `solid 1px ${colors.primary}`),
        '&:focus': {
            borderColor: (props) => (props.error ? colors.red : colors.primary),
        },
        '&:hover': {
            borderColor: (props) => (props.error ? colors.red : colors.primary),
        },
    },
    iconContainer: {
        width: '10%',
        color: (props) => (props.error ? colors.red : colors.primary),
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
        fontSize: '0.75rem',
        border: 'none',
        outline: 'none',
        padding: '0.5rem',
        color: colors.primary,
        backgroundColor: colors.white,
        '&:first-child': {
            color: (props) => (props.error ? colors.red : colors.blue),
        },
        '& ::placeholder': {
            color: (props) => (props.error ? colors.red : colors.blue),
            opacity: 1,
            fontSize: '0.75rem',
        },
        '& ::-ms-expand': {
            display: 'none',
        },
        '& option': {
            width: '50rem',
        },
    },
    icon: {
        color: (props) => (props.error ? colors.red : colors.primary),
    },
    red: {
        color: colors.red,
    },
});
const SelectWithLabelIcon = ({
    label,
    error,
    errorMsg,
    inputRegister,
    iscompulsory,
    placeholder,
    options,
    ...props
}) => {
    const classes = useStyles({ error });
    return (
        <Box className={classes.container}>
            <Typography className={classes.label}>
                {label} {iscompulsory && <span className={cn({ [classes.red]: error })}>*</span>}
            </Typography>
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
                    <select ref={inputRegister} className={cn(classes.input)} error={error} {...props}>
                        <option value="" hidden>
                            --{placeholder}--
                        </option>
                        {options.map((item, i) => (
                            <option key={i} value={item.value}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                </Box>
                {/* <Grid
                    container
                    ref={inputRegister}
                    error={errorMsg?.message ? true : false}
                    alignItems="center"
                    justify="center"
                    className={classes.iconContainer}
                >
                    {icon ? icon : <ArrowDropDown className={classes.icon} />}
                </Grid> */}
            </Grid>
            <ErrorMessage errorMsg={errorMsg} />
        </Box>
    );
};

SelectWithLabelIcon.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.element,
    name: PropTypes.string,
    inputRegister: PropTypes.any,
    errorMsg: PropTypes.object,
    options: PropTypes.array,
    iscompulsory: PropTypes.bool,
};
export default SelectWithLabelIcon;
