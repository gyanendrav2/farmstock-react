import React, { useEffect, useState } from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { colors } from '../../theme/colors';
import { images } from '../../assets/images';
import { useLocation } from 'react-router';
import { getAllPostInfoAPIcall } from '../../redux/actions/animalActions';
import { LocationOn } from '@material-ui/icons';
import cn from 'classnames';
import $ from 'jquery';

const useStyles = makeStyles({
    container: {
        backgroundImage: (props) => (props.remove ? 'none' : `url(${images.celebration})`),
        // backgroundColor: colors.lighterPrimary,
        backgroundSize: 'cover',
        backgroundPosition: '100% 100%',
        padding: '1.5rem',
        '@media (max-width: 500px)': {
            // backgroundImage: 'none',
            padding: 0,
        },
    },
    fieldWrapper: {
        maxWidth: '70%',
        margin: 'auto',
        '@media (max-width:500px)': {
            maxWidth: '100%',
        },
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
        fontSize: '1.5rem',
        fontWeight: 700,
        width: '100%',
    },
    subHeaing: {
        fontSize: '2rem',
        fontWeight: 900,
        marginBottom: '.3rem',
        paddingLeft: '1rem',
        lineHeight: '2rem',
        marginTop: '1rem',
    },
    address: {
        fontSize: '1.5rem',
        fontWeight: 500,
        marginBottom: '.3rem',
        paddingLeft: '1rem',
        lineHeight: '2rem',
        marginTop: '1rem',
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
    link: {
        marginTop: '0.5rem',
        fontSize: '1.5rem',
        fontWeight: 700,
        width: '100%',
        display: 'inline-block',
    },
    mb: {
        marginBottom: '2rem',
    },
    linksWapper: {
        backgroundColor: colors.lighterGray,
        padding: '1rem',
    },
    googleplay: {
        width: '10rem',
        alignSelf: 'flex-start',
        '@media (max-width:700px)': {
            width: '100%',
        },
    },
    no1app: {
        fontSize: '1.1rem',
        fontWeight: 600,
    },
    logo: {
        width: '2rem',
        borderRadius: '50%',
        marginRight: '1rem',
    },
});
const CongratsPage = () => {
    const [time, setTime] = useState(true);
    const classes = useStyles({ remove: time });
    const routes = useLocation();
    const [state, setState] = useState({
        username: '',
        animal: '',
        animalPhoto: '',
        heading: '',
        location: '',
        link: '',
    });
    useEffect(() => {
        $(window).on('load', () => {
            setTime(false);
            setTimeout(() => {
                setTime(true);
            }, 5000);
        });
    }, []);

    useEffect(() => {
        const data = routes?.state?.info;
        if (data) {
            getAllInformation(data.userInfo.postId);
        }
    }, [routes]);

    const getAllInformation = async (id) => {
        const result = await getAllPostInfoAPIcall(id);
        if (result.status === 200) {
            const data = result.data;
            setState({
                ...state,
                heading: data.heading,
                username: data.user.full_name,
                animal: data.animal.name,
                animalPhoto: data.images[0].image.original,
                location: data.location_text,
                link: data.deep_link,
            });
        }
    };

    return (
        <Box className={classes.container}>
            {/* <img className={classes.image} src={images.celebration} /> */}
            <Typography className={classes.heading}>{state.username} जी, बधाई हो </Typography>
            <Box className={classes.fieldWrapper}>
                <Box className={classes.imageBorder}>
                    <Typography className={classes.heading}>
                        Krishify पर बिक्री के लिए आपके पशु की पोस्ट बन गयी है
                    </Typography>
                    <img className={classes.imageBorder} src={state.animalPhoto} />
                    <Typography className={classes.subHeaing}>{state.heading}</Typography>
                    <Typography className={classes.address}>
                        <LocationOn />
                        {' ' + state.location}
                    </Typography>
                </Box>

                <Grid container className={classes.linksWapper}>
                    <Typography className={classes.boldText}>
                        अपने पशु के लिए इच्छुक खरीददार देखने के लिए और उनसे बात करने के लिए नीचे लिंक दबाकर Krishify ऍप
                        इनस्टॉल करें।
                    </Typography>
                    <a href={state.link} className={cn(classes.link, classes.mb)}>
                        {state.link}
                    </a>
                    <Grid item xs={8} sm={8} lg={8} xl={8} md={8} container alignItems="center" justify="flex-start">
                        <img src={images.logo} className={classes.logo} />
                        <Typography className={classes.no1app}>Krishify-किसान का ऍप</Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} lg={4} xl={4} md={4} container alignItems="center" justify="flex-end">
                        <img src={images.googleplay} className={classes.googleplay} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default CongratsPage;
