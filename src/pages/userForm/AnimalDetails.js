import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { colors } from '../../theme/colors';
import SelectWithLabelIcon from '../../components/inputs/SelectWithLabelIcon';
import InputWithLabel from '../../components/inputs/InputWithLabel';
import { dropdownFarmatter } from '../../helper/dropdownFarmatter';
import CustomButton from '../../components/buttons/CustomButton';
import { fetcher } from '../../redux/actions/animalActions';
import useSWR from 'swr';
import { apiEndpoints } from '../../utility/apiEndpoints';

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.lighterPrimary,
        padding: '1.5rem',
    },
    fieldWrapper: {
        maxWidth: '25rem',
    },
    title: {
        fontSize: '2rem',
        fontWeight: 500,
        marginBottom: '2rem',
    },
    button: {
        marginTop: '1rem',
        width: '7rem',
    },
});

const AnimalDetails = ({ inputRegister, errors }) => {
    const classes = useStyles();
    const featureData = useSWR(apiEndpoints.featureListing, fetcher);
    const animals = useSWR(apiEndpoints.animals, fetcher);

    const [featureListingData, setFeatureListingData] = useState([]);
    const [animalsList, setAnimalsList] = useState([]);

    useEffect(() => {
        if (featureData.data) {
            setFeatureListingData(featureData.data);
        }
    }, [featureData.data]);

    useEffect(() => {
        if (animals.data) {
            setAnimalsList(animals.data);
        }
    }, [animals.data]);

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.fieldWrapper}>
                <Typography className={classes.title}>Cattle Details</Typography>
                <SelectWithLabelIcon
                    iscompulsory={true}
                    label="पशु चुनें"
                    placeholder="पशु चुनें"
                    name="pickAnimal"
                    options={dropdownFarmatter(animalsList)}
                    error={errors?.pickAnimal ? true : false}
                    errorMsg={errors?.pickAnimal?.message}
                    inputRegister={inputRegister}
                />
                {featureListingData.map((item) => {
                    if (item.feature_type === 'integer') {
                        return (
                            <InputWithLabel
                                iscompulsory={item.is_compulsory}
                                label={item.action_text}
                                type="number"
                                name={item.name}
                                error={errors[item.name] ? true : false}
                                errorMsg={errors[item.name]?.message ? item.error : ''}
                                inputRegister={inputRegister}
                            />
                        );
                    } else if (item.feature_type === 'key_value_pair_drop_down') {
                        return (
                            <>
                                <SelectWithLabelIcon
                                    iscompulsory={item.is_compulsory}
                                    label={item.action_text}
                                    placeholder={item.action_text}
                                    name={item.name}
                                    options={dropdownFarmatter(item.dict_drop_down)}
                                    error={errors[item.name] ? true : false}
                                    errorMsg={errors[item.name]?.message ? item.error : ''}
                                    inputRegister={inputRegister}
                                />
                            </>
                        );
                    } else if (item.feature_type === 'int_drop_down') {
                        return (
                            <SelectWithLabelIcon
                                iscompulsory={item.is_compulsory}
                                label={item.action_text}
                                placeholder={item.action_text}
                                name={item.name}
                                options={dropdownFarmatter(item.dict_drop_down)}
                                error={errors[item.name] ? true : false}
                                errorMsg={errors[item.name]?.message ? item.error : ''}
                                inputRegister={inputRegister}
                            />
                        );
                    } else if (item.feature_type == 'string') {
                        return (
                            <>
                                <InputWithLabel
                                    iscompulsory={item.is_compulsory}
                                    label={item.action_text}
                                    as="textarea"
                                    name={item.name}
                                    error={errors[item.name] ? true : false}
                                    errorMsg={errors[item.name]?.message ? item.error : ''}
                                    inputRegister={inputRegister}
                                />
                            </>
                        );
                    } else if (item.feature_type == 'images') {
                        return (
                            // <ImageCard
                            //     action_text={item.action_text}
                            //     image={img}
                            //     stateName={img}
                            //     data={item.images}
                            //     setData={onImageChange}
                            //     postImage={imageHandler}
                            // />
                            <></>
                        );
                    }
                })}
                <CustomButton externalClass={classes.button} type="submit" label="Submit" />
            </Box>
        </Box>
    );
};

AnimalDetails.propTypes = {
    inputRegister: PropTypes.func,
    errors: PropTypes.object,
};

export default AnimalDetails;
