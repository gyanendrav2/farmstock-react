import React, { useState } from 'react';
// import ImageCard from '../../components/card/imageCard';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { userFormValidationGenerator } from '../../formValidation/userFormValidation';
import { Box, makeStyles, Typography } from '@material-ui/core';
import UserDetails from './UserDetails';
import AnimalDetails from './AnimalDetails';
import { createUser } from '../../helper/createUser';
import { setAuthrizationToken } from '../../utility/API';
import { useHistory } from 'react-router';
import { images } from '../../assets/images';
import { colors } from '../../theme/colors';

const useStyles = makeStyles({
    rootWrapper: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        backgroundImage: `url(${images.formbg})`,
        '@media (max-width: 500px)': {
            backgroundImage: 'none',
            paddingTop: 0,
            paddingBottom: 0,
        },
    },
    wrapper: {
        maxWidth: '70%',
        margin: 'auto',
        backgroundColor: colors.lighterGray,
        boxShadow: '0 0 20px -1px rgba(0,0,0,0.3)',
        '@media (max-width:500px)': {
            maxWidth: '100%',
        },
    },
    heading: {
        fontSize: '2rem',
        textAlign: 'center',
        fontWeight: 600,
        '@media (max-width:649px)': {
            fontSize: '1rem',
        },
    },
    subHeading: {
        fontSize: '1rem',
        textAlign: 'center',
        fontWeight: 500,
        paddingBottom: '1rem',
        '@media (max-width:649px)': {
            fontSize: '0.8rem',
        },
    },
});

const UserForm = () => {
    localStorage.setItem('token', JSON.stringify('Token fb9fd71361643c90167ec6a59cb129af4cd9a77f'));
    setAuthrizationToken();
    const classes = useStyles();
    const history = useHistory();
    const [validation, setValidation] = useState({});
    const { register, errors, handleSubmit, getValues, reset } = useForm({
        resolver: yupResolver(userFormValidationGenerator(validation)),
    });
    const [imagesUploaded, setImagesUploaded] = useState([]);
    const [imagesLinks, setImagesLinks] = useState([]);
    const [moreInfo, setMoreInfo] = useState({});
    const [imageThumbnail, setImageThumbnail] = useState({ label: '', images: [] });

    const handleImageUploaded = (imageId) => {
        const data = [...imagesUploaded];
        data.push(imageId);
        setImagesUploaded(data);
    };

    const handleImageLinks = (link) => {
        const data = [...imagesUploaded];
        data.push(link);
        setImagesLinks(data);
    };

    const handleFullInfo = (info) => {
        setMoreInfo({ ...moreInfo, ...info });
    };

    const submit = async (data) => {
        await createUser(
            data,
            imagesUploaded,
            setImagesUploaded,
            reset,
            setImageThumbnail,
            imagesLinks,
            moreInfo,
            history
        );
    };

    return (
        <Box className={classes.rootWrapper}>
            <Box className={classes.wrapper}>
                <Typography className={classes.heading}>Krishify ऑनलाइन पशु हाट में आपका स्वागत है</Typography>
                <Typography className={classes.subHeading}>
                    पशु बेचने के लिए कृपया नीचे की सभी जानकारी भर दें
                </Typography>
                <form onSubmit={handleSubmit(submit)}>
                    <UserDetails
                        inputRegister={register}
                        getValues={getValues}
                        getFullInfo={handleFullInfo}
                        errors={errors}
                    />
                    <AnimalDetails
                        inputRegister={register}
                        uploadImages={handleImageUploaded}
                        getValues={getValues}
                        imageThumbnail={imageThumbnail}
                        setImageThumbnail={setImageThumbnail}
                        getDynamicValidation={setValidation}
                        getImagesLinks={handleImageLinks}
                        getFullInfo={handleFullInfo}
                        resetFields={reset}
                        errors={errors}
                    />
                </form>
            </Box>
        </Box>
    );
};

export default UserForm;
