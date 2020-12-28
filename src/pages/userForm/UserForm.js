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

const useStyles = makeStyles({
    wrapper: {
        maxWidth: '70%',
        margin: 'auto',
        '@media (max-width:500px)': {
            maxWidth: '100%',
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
        await createUser(data, imagesUploaded, setImagesUploaded, reset, setImageThumbnail, imagesLinks, moreInfo, history);
    };

    return (
        <Box className={classes.wrapper}>
            <form onSubmit={handleSubmit(submit)}>
                <Typography className="text-center p-2">
                    Your post is seen on the Krishify network whole, this will increase the your chance
                </Typography>
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
                    errors={errors}
                />
            </form>
        </Box>
    );
};

export default UserForm;
