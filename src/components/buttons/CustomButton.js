import React from 'react';
import PropTypes from 'prop-types';
import { Button, makeStyles } from '@material-ui/core';
import { colors } from '../../theme/colors';
import cn from "classnames";

const useStyles = makeStyles({
    button: {
        width: (props) => (props.width ? props.width : 'auto'),
        padding: '0.4rem 0.7rem',
        backgroundColor: colors.lightGreen,
        borderRadius: '5px',
        color: (props) => (props.color ? props.color : colors.white),
        '&:hover': {
            backgroundColor: colors.lightGreen,
        },
    },
});

const CustomButton = ({ label, width, color, externalClass, ...rest }) => {
    const classes = useStyles({width, color});

    return (
        <Button className={cn(classes.button, externalClass)} {...rest}>
            {label}
        </Button>
    );
};

CustomButton.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    width: PropTypes.string,
    color: PropTypes.string,
    externalClass: PropTypes.string
};

export default CustomButton;
