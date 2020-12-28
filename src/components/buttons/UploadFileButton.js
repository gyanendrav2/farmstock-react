import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import CustomButton from './CustomButton';
import { Box, CardActionArea, CardMedia, Grid } from '@material-ui/core';
import ResponsiveImage from '../responsiveImage/ResponsiveImage';

const useStyles = makeStyles({
    image:{
        height: '10rem',
        objectFit: 'cover',
    },
    input: {
        width: 0,
        height: 0,
        overflow: 'hidden',
    },
    button: {
        width: '100%',
        padding: '0.3rem',
        fontSize: '0.8rem',
        textTransform: 'capitalize',
    },
});

const UploadFileButton = ({ handleFilePicker, label, alt, src }) => {
    const classes = useStyles();
    const input = createRef();
    const handleTrigger = () => {
        input.current.click();
    };
    return (
        <Grid item md={6} sm={6} xs={6} onClick={handleTrigger}>
            <CardActionArea>
                <input
                    ref={input}
                    className={classes.input}
                    type="file"
                    accept="image/*"
                    style={{
                        display: 'none',
                    }}
                    onChange={handleFilePicker}
                />
                <ResponsiveImage src={src}/>
                {/* <CardMedia component="img" alt={alt} height="100%" src={src} title={alt} className={classes.image} /> */}
                <Box>
                    <CustomButton externalClass={classes.button} label={label} />
                </Box>
            </CardActionArea>
        </Grid>
    );
};

UploadFileButton.propTypes = {
    handleFilePicker: PropTypes.func,
    label: PropTypes.func,
    alt: PropTypes.string,
    src: PropTypes.string,
};

export default UploadFileButton;
