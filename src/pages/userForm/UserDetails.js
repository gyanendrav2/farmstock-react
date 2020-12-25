import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { colors } from '../../theme/colors';
import InputWithLabel from '../../components/inputs/InputWithLabel';

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.lightyellow,
        padding: '1.5rem'
    },
    fieldWrapper: {
        maxWidth: '25rem',
    },
});

const UserDetails = ({ inputRegister, errors }) => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Box className={classes.fieldWrapper}>
                <Typography className="text-center mb-4 mt4"> User Details</Typography>

                <InputWithLabel
                    iscompulsory={true}
                    label="User Name"
                    name="userName"
                    error={errors?.userName ? true : false}
                    errorMsg={errors?.userName?.message}
                    inputRegister={inputRegister}
                />
                <InputWithLabel
                    iscompulsory={true}
                    label="Phone Number"
                    name="phoneNumber"
                    error={errors?.userName ? true : false}
                    errorMsg={errors?.phoneNumber?.message}
                    inputRegister={inputRegister}
                />

                <Typography>Your location is Rampur, Dumli</Typography>
            </Box>
        </Box>
    );
};

UserDetails.propTypes = {
    inputRegister: PropTypes.func,
    errors: PropTypes.object,
};

export default UserDetails;
