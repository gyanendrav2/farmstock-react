import React, { useEffect, useState } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { colors } from '../../theme/colors';
import { images } from '../../assets/images';
import { useLocation } from 'react-router';
const useStyles = makeStyles({
    container: {
        backgroundImage: `url(${images.formbg})`,
        backgroundColor: colors.lighterPrimary,
        backgroundSize: 'cover',
        backgroundPosition: '100% 100%',
        padding: '1.5rem',
        '@media (max-width: 501px)': {
            backgroundImage: 'none',
        },
    },
    fieldWrapper: {
        maxWidth: '25rem',
        margin: 'auto',
    },

    heading: {
        marginTop: '0.5rem',
        marginBottom: '1rem',
        fontSize: '1Srem',
        textAlign: 'center',
        fontWeight: 'bold',
        width: '100%',
        '@media (min-width: 501px)': {
            fontSize: '2rem',
        },
    },

    boldText: {
        marginTop: '0.5rem',
        marginBottom: '1rem',
        fontSize: 14,
        fontWeight: 'bold',
        width: '100%',
    },
    subHeaing: {
        fontSize: '1rem',
        fontWeight: 'bold',
        marginBottom: '.3rem',
        margin: '.5rem',
    },
    image: {
        position: 'relative',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: '20%',
        width: '100%',
        marginTop: '-60%',
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
            <Typography className={classes.heading}>{state.username} जी, बधाई हो </Typography>
            <Box className={classes.fieldWrapper}>
                <Box className={classes.imageBorder}>
                    <Typography className={classes.heading}>
                        Krishify पर बिक्री के लिए आपके पशु की पोस्ट बन गयी है
                    </Typography>
                    <img className={classes.imageBorder} src={state.animalPhoto} />
                    <Typography className={classes.subHeaing}>
                        {state.milk} दूध लीटर, बयात {state.byat} , ₹ {state.rate}
                    </Typography>
                    <Typography className={classes.subHeaing}>{state.location}</Typography>
                </Box>
                <Typography className={classes.boldText}>
                    अपने पशु के लिए इच्छुक खरीददार देखने के लिए और उनसे बात करने के लिए नीचे लिंक दबाकर Krishify ऍप
                    इनस्टॉल करें।
                </Typography>
            </Box>
        </Box>
    );
};

export default CongratsPage;
