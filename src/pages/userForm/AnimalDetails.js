import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { colors } from '../../theme/colors';
import SelectWithLabelIcon from '../../components/inputs/SelectWithLabelIcon';
import InputWithLabel from '../../components/inputs/InputWithLabel';
import { dropdownFarmatter, dropdownFarmatterIfMaxMinFound } from '../../helper/dropdownFarmatter';
import CustomButton from '../../components/buttons/CustomButton';
import { fetcher, getAnimalThumbnailAPIcall, uploadAnimalImagesAPIcall } from '../../redux/actions/animalActions';
import useSWR from 'swr';
import { apiEndpoints } from '../../utility/apiEndpoints';
import ImageCard from '../../components/card/ImageCard';
import { baseUrl } from '../../utility/baseurls';
import { validationGenerator } from '../../helper/validationGenerator';
import TextArea from '../../components/inputs/TextArea';
import { toast } from 'react-toastify';
import { FRONT_SUCCESS, BACK_SUCCESS, LEFT_SUCCESS, RIGHT_SUCCESS } from '../../redux/actionTypes/animalTypes';

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.lighterPrimary,
        // backgroundImage: `url(${images.formbg})`,
        // backgroundSize: 'cover',
        // backgroundPosition: '100% 100%',
        padding: '1.5rem',
        // '@media (min-width: 501px)': {
        //     backgroundImage: 'none',
        // },
    },
    fieldWrapper: {
        maxWidth: '25rem',
        margin: 'auto',
    },
    title: {
        fontSize: '2rem',
        fontWeight: 500,
        marginBottom: '2rem',
        textAlign: 'center',
        '@media (max-width:649px)': {
            fontSize: '1rem',
            fontWeight: 600,
        },
    },
    button: {
        marginTop: '1rem',
        width: '100%',
        fontSize: '1rem',
        fontWeight: 600,
        backgroundColor: colors.lightGreen,
    },
});

const AnimalDetails = ({
    inputRegister,
    errors,
    uploadImages,
    imageThumbnail,
    setImageThumbnail,
    getDynamicValidation,
    getImagesLinks,
    getValues,
    resetFields,
}) => {
    const classes = useStyles();
    const picOrientation = [FRONT_SUCCESS, BACK_SUCCESS, LEFT_SUCCESS, RIGHT_SUCCESS];
    const featureData = useSWR(apiEndpoints.featureListing, fetcher);
    const animals = useSWR(apiEndpoints.animals, fetcher);
    const [featureListingData, setFeatureListingData] = useState([]);
    const [animalsList, setAnimalsList] = useState([]);

    useEffect(() => {
        if (featureData.data) {
            setFeatureListingData(featureData.data);
            getDynamicValidation(validationGenerator(featureData.data));
        }
    }, [featureData.data]);

    useEffect(() => {
        if (animals.data) {
            setAnimalsList(animals.data);
        }
    }, [animals.data]);

    const handleAnimal = async (e) => {
        const result = await getAnimalThumbnailAPIcall(e.target.value);
        if (result.status === 200) {
            const images = result.data[0].images.map((item) => {
                return { buttonText: item.action_text, image: baseUrl + item.image.thumbnail };
            });
            setImageThumbnail({ label: result.data[0].action_text, images: images });
            console.log(result.data);
            setFeatureListingData(result.data);
            getDynamicValidation(validationGenerator(result.data));
        }
    };

    const handleFileUpload = async (e, index) => {
        const result = await uploadAnimalImagesAPIcall(e.target.files[0], picOrientation[index]);

        if (result?.data?.id) {
            const data = { ...imageThumbnail };
            data.images[index].image = result.data.image.thumbnail;
            setImageThumbnail(data);
            uploadImages(result.data.id);
            getImagesLinks(result.data.image.original);
        }
    };

    const ifAnimalNotSelected = () => {
        const data = { ...getValues() };
        if (data.animal === '') {
            const refactorData = {
                userName: data.userName,
                phoneNumber: data.phoneNumber,
                state: data.state,
                district: data.district,
                block_id: data.block_id,
            };
            resetFields(refactorData);
            toast.success('कृपया पहले पशु चुन।');
        }
    };

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.fieldWrapper}>
                <Typography className={classes.title}>कृपया अपने पशु की डिटेल भरें </Typography>
                <SelectWithLabelIcon
                    iscompulsory={true}
                    label="पशु चुनें"
                    placeholder="पशु चुनें"
                    name="animal"
                    options={dropdownFarmatter(animalsList)}
                    error={errors?.animal ? true : false}
                    errorMsg={errors?.animal?.message}
                    inputRegister={inputRegister}
                    onChange={handleAnimal}
                />
                {featureListingData.map((item) => {
                    if (item.feature_type === 'integer') {
                        return (
                            <InputWithLabel
                                iscompulsory={item.is_compulsory}
                                label={item.action_text}
                                type="number"
                                placeholder={item.hint}
                                name={item.feature}
                                error={errors[item.feature] ? true : false}
                                errorMsg={errors[item.feature]?.message}
                                inputRegister={inputRegister}
                                onChange={ifAnimalNotSelected}
                            />
                        );
                    } else if (item.feature_type === 'key_value_pair_drop_down') {
                        return (
                            <>
                                <SelectWithLabelIcon
                                    iscompulsory={item.is_compulsory}
                                    label={item.action_text}
                                    placeholder={item.action_text}
                                    name={item.feature}
                                    options={dropdownFarmatter(item.dict_drop_down)}
                                    error={errors[item.feature] ? true : false}
                                    errorMsg={errors[item.feature]?.message}
                                    inputRegister={inputRegister}
                                    onChange={ifAnimalNotSelected}
                                />
                            </>
                        );
                    } else if (item.feature_type === 'int_drop_down') {
                        return (
                            <SelectWithLabelIcon
                                iscompulsory={item.is_compulsory}
                                label={item.action_text}
                                placeholder={item.action_text}
                                name={item.feature}
                                options={dropdownFarmatterIfMaxMinFound(item)}
                                error={errors[item.feature] ? true : false}
                                errorMsg={errors[item.feature]?.message}
                                inputRegister={inputRegister}
                                onChange={ifAnimalNotSelected}
                            />
                        );
                    } else if (item.feature_type == 'string') {
                        return (
                            <>
                                {/* <InputWithLabel
                                    iscompulsory={item.is_compulsory}
                                    label={item.action_text}
                                    as="textarea"
                                    placeholder={item.hint}
                                    name={item.feature}
                                    error={errors[item.feature] ? true : false}
                                    errorMsg={errors[item.feature]?.message}
                                    inputRegister={inputRegister}
                                /> */}
                                <TextArea
                                    iscompulsory={item.is_compulsory}
                                    label={item.action_text}
                                    as="textarea"
                                    placeholder={item.hint}
                                    name={item.feature}
                                    error={errors[item.feature] ? true : false}
                                    errorMsg={errors[item.feature]?.message}
                                    inputRegister={inputRegister}
                                    onChange={ifAnimalNotSelected}
                                />
                            </>
                        );
                    } else if (item.feature_type == 'images') {
                        return <ImageCard imageThumbnail={imageThumbnail} handleFileUpload={handleFileUpload} />;
                    }
                })}
                <CustomButton externalClass={classes.button} type="submit" label="डिटेल अपलोड करें" />
            </Box>
        </Box>
    );
};

AnimalDetails.propTypes = {
    inputRegister: PropTypes.func,
    errors: PropTypes.object,
    getValues: PropTypes.func,
    uploadImages: PropTypes.func,
    imageThumbnail: PropTypes.object,
    setImageThumbnail: PropTypes.func,
    getDynamicValidation: PropTypes.func,
    getImagesLinks: PropTypes.func,
    resetFields: PropTypes.func,
};

export default AnimalDetails;
