import React, { useEffect, useState } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { colors } from '../../theme/colors';
import { images } from '../../assets/images';
import { useLocation } from 'react-router';
const useStyles = makeStyles({
    container: {
        marginBottom: '0.5rem',
    },
    wrapper: {
        width: '100%',
    },
    heading: {
        marginTop: '0.5rem',
        marginBottom: '1rem',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        width: '100%',
    },

    boldText: {
        marginTop: '0.5rem',
        marginBottom: '1rem',
        fontSize: 14,
        fontWeight: 'bold',
        width: '100%',
    },
    subHeaing: {
        fontSize: 14,
        marginLeft: 8,
        marginBottom: '1rem',
    },
    image: {
        position: 'relative',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: '50%',
        width: '100%',
        marginTop: '-21%',
    },
    imageBorder: {
        position: 'relative',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: '50%',
        width: '100%',
        borderWidth: 1,
        borderColor: 'blue',
        border: 'solid 1px',
    },
    border: (props) => (props.error ? `solid 1px ${colors.red}` : `solid 1px ${colors.primary}`),
    '&:focus': {
        borderColor: 'blue',
    },
    '&:hover': {
        borderColor: (props) => (props.error ? colors.red : colors.primary),
    },
    red: {
        color: colors.red,
    },
});
const CongratsPage = () => {
    const classes = useStyles();
    const routes = useLocation();
    console.log(routes);
    const [state, setState] = useState({
        username: '',
        animal: '',
        animalPhoto: '',
        milk: '',
        byat: '',
        rate: '',
        location: '',
    });

    useEffect(() => {
        const data = routes?.state?.info;
        if (data) {
            setState({
                username: data.userInfo.userName,
                animal: data.userName,
                animalPhoto: data.images[0],
                milk: data.userInfo.milking_capacity,
                byat: data.userInfo.pregnancy_count,
                rate: data.userInfo.rate,
                location: data.userInfo.stateName + ' ' + data.userInfo.districtName + ' ' + data.userInfo.blockName,
            });
        }
    }, [routes]);

    return (
        <Box className={classes.container}>
            <img className={classes.image} src={images.celebration} />
            <Typography className={classes.heading}>{state.username}, Congratulations</Typography>
            <Typography className={classes.subHeaing}>
                Your post is publicy available. you will get call from the customers soon
            </Typography>
            <Box className={classes.imageBorder}>
                <Typography className={classes.heading}>
                    This, {state.animal} is available for sale on Krishify
                </Typography>
                <img className={classes.imageBorder} src={state.animalPhoto} />
                <Typography className={classes.subHeaing}>
                    {state.milk} Milk, {state.byat}, Rs {state.rate}
                </Typography>
                <Typography className={classes.subHeaing}>{state.location}</Typography>
            </Box>
            <Typography className={classes.boldText}>Apna pashu ka ordertrack karne k liea click kare</Typography>
        </Box>
    );
};

export default CongratsPage;
