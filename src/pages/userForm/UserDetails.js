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
import { filterValueById } from '../../helper/filterValueById';
import { images } from '../../assets/images';

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.lighterPrimary,
        backgroundImage: `url(${images.formbg})`,
        backgroundSize: 'cover',
        backgroundPosition: '100% 100%',
        padding: '1.5rem',
        '@media (min-width: 501px)': {
            backgroundImage: 'none',
        },
    },
    fieldWrapper: {
        maxWidth: '25rem',
        margin: 'auto',
    },
    heading: {
        fontSize: '2rem',
        fontWeight: 500,
        marginBottom: '2rem',
        textAlign: 'center',
        '@media (max-width:649px)': {
            fontSize: '1rem',
            fontWeight: 600,
        },
    },
});

const UserDetails = ({ inputRegister, errors, getFullInfo }) => {
    const classes = useStyles();
    const states = useSWR(apiEndpoints.states, fetcher);
    const [district, setDistrict] = useState([]);
    const [blocks, setBlocks] = useState([]);

    const handleState = async (e) => {
        if (states?.data?.results) {
            const getStateName = filterValueById(states?.data?.results, e.target.value);
            if (getStateName.length) {
                getFullInfo({ stateName: getStateName[0].name });
            }
        }

        const result = await getAllDistrictAPIcall(e.target.value);
        if (result.status === 200) {
            setDistrict(dropdownFarmatter(result.data.results));
        }
    };

    const handleDistrict = async (e) => {
        if (district) {
            const getStateName = district.filter((item) => item.value == e.target.value);
            if (getStateName.length) {
                getFullInfo({ districtName: getStateName[0].label });
            }
        }

        const result = await getAllBlocksAPIcall(e.target.value);
        if (result.status === 200) {
            setBlocks(dropdownFarmatter(result.data.results));
        }
    };

    const handleBlock = async (e) => {
        if (blocks) {
            const getStateName = blocks.filter((item) => item.value == e.target.value);
            if (getStateName.length) {
                getFullInfo({ blockName: getStateName[0].label });
            }
        }
    };

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.fieldWrapper}>
                <Typography className={classes.heading}>कृपया अपनी डिटेल भरें </Typography>

                <InputWithLabel
                    iscompulsory={true}
                    label="आपका नाम"
                    name="userName"
                    error={errors?.userName ? true : false}
                    errorMsg={errors?.userName?.message}
                    inputRegister={inputRegister}
                />
                <InputWithLabel
                    iscompulsory={true}
                    label="आपका मोबाइल नंबर"
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
                    label="आपका राज्य"
                    placeholder="राज्य चुनें"
                    name="state"
                    options={dropdownFarmatter(states?.data?.results ? states?.data?.results : [])}
                    onChange={handleState}
                    error={errors.state ? true : false}
                    errorMsg={errors.state?.message}
                    inputRegister={inputRegister}
                />
                <SelectWithLabelIcon
                    iscompulsory={true}
                    label="आपका जिला"
                    placeholder="जिला चुनें"
                    name="district"
                    options={district}
                    onChange={handleDistrict}
                    error={errors.state ? true : false}
                    errorMsg={errors.state?.message}
                    inputRegister={inputRegister}
                />
                <SelectWithLabelIcon
                    iscompulsory={true}
                    label="आपका ब्लॉक"
                    placeholder="ब्लॉक चुनें"
                    name="block_id"
                    options={blocks}
                    onChange={handleBlock}
                    error={errors.state ? true : false}
                    errorMsg={errors.state?.message}
                    inputRegister={inputRegister}
                />
            </Box>
        </Box>
    );
};

UserDetails.propTypes = {
    inputRegister: PropTypes.func,
    errors: PropTypes.object,
    getFullInfo: PropTypes.func,
};

export default UserDetails;
