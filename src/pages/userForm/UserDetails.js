import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { colors } from '../../theme/colors';
import InputWithLabel from '../../components/inputs/InputWithLabel';
import SelectWithLabelIcon from '../../components/inputs/SelectWithLabelIcon';
import useSWR from 'swr';
import { apiEndpoints } from '../../utility/apiEndpoints';
import { fetcher, getAllBlocksAPIcall, getAllDistrictAPIcall } from '../../redux/actions/animalActions';
import { dropdownFarmatter } from '../../helper/dropdownFarmatter';

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.lightyellow,
        padding: '1.5rem',
    },
    fieldWrapper: {
        maxWidth: '25rem',
    },
});

const UserDetails = ({ inputRegister, errors }) => {
    const classes = useStyles();
    const states = useSWR(apiEndpoints.states, fetcher);
    const [district, setDistrict] = useState([]);
    const [blocks, setBlocks] = useState([]);


    const handleState = async (e) => {
        const result = await getAllDistrictAPIcall(e.target.value);
        if (result.status === 200) {
            setDistrict(dropdownFarmatter(result.data.results));
        }
    };

    const handleDistrict = async (e) => {
        const result = await getAllBlocksAPIcall(e.target.value);
        if (result.status === 200) {
            setBlocks(dropdownFarmatter(result.data.results));
        }
    };

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

                {/* <InputWithLabel
                    iscompulsory={true}
                    label="Location"
                    name="location"
                    error={errors?.location ? true : false}
                    errorMsg={errors?.location?.message}
                    inputRegister={inputRegister}
                /> */}

                <SelectWithLabelIcon
                    iscompulsory={true}
                    label="State"
                    placeholder="Select State"
                    name="state"
                    options={dropdownFarmatter(states?.data?.results ? states?.data?.results : [])}
                    onChange={handleState}
                    error={errors.state ? true : false}
                    errorMsg={errors.state?.message}
                    inputRegister={inputRegister}
                />
                <SelectWithLabelIcon
                    iscompulsory={true}
                    label="District"
                    placeholder="Select District"
                    name="district"
                    options={district}
                    onChange={handleDistrict}
                    error={errors.state ? true : false}
                    errorMsg={errors.state?.message}
                    inputRegister={inputRegister}
                />
                 <SelectWithLabelIcon
                    iscompulsory={true}
                    label="Block"
                    placeholder="Select Block"
                    name="block_id"
                    options={blocks}
                    error={errors.state ? true : false}
                    errorMsg={errors.state?.message}
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
