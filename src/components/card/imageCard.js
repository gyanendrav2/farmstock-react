import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import UploadFileButton from '../buttons/UploadFileButton';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { images } from '../../assets/images';

const useStyles = makeStyles({
    wrapper: {
        marginBottom: '1rem',
    },
    title: {
        marginTop: '1rem',
        marginBottom: '1rem',
        fontWeight: 600,
    },
});

const ImageCard = ({ imageThumbnail, handleFileUpload }) => {
    const classes = useStyles();
    const uploadStatusIndex = ['frontSuccess', 'backSuccess', 'leftSuccess', 'rightSuccess'];
    const uploadingStatus = useSelector((state) => state.animalReducer);

    return (
        <Box>
            <Typography className={classes.title}>{imageThumbnail.label}</Typography>

            <Grid container spacing={2} className={classes.wrapper}>
                {imageThumbnail.images.map((item, i) => (
                    <UploadFileButton
                        key={i}
                        handleFilePicker={(e) => handleFileUpload(e, i)}
                        alt={item.buttonText}
                        src={uploadingStatus[uploadStatusIndex[i]] ? images.uploading : item.image}
                        label={item.buttonText}
                    />
                ))}
            </Grid>
        </Box>
    );
};

ImageCard.propTypes = {
    imageThumbnail: PropTypes.object,
    handleFileUpload: PropTypes.func,
};

export default ImageCard;
