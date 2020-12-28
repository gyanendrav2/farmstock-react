import React, { useState, useContext } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { colors } from '../theme/colors';
import ImageCard from '../components/card/ImageCard';
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
    return (
        <Box className={classes.container}>
            <img
                className={classes.image}
                src={`https://dev.farmstock.in/media/__sized__/listing/cattlelistingimage/ZII6hfn9QDaBwkTUmrgiQA-thumbnail-700x700.png`}
            />
            <Typography className={classes.heading}>Harpreet Singh ji, Congratulations</Typography>
            <Typography className={classes.subHeaing}>
                Your post is publicy available. you will get call from the customers soon
            </Typography>
            <Box className={classes.imageBorder}>
                <Typography className={classes.heading}>This, Sahiwal Cow is available for sale on Krishify</Typography>
                <img
                    className={classes.imageBorder}
                    src={`https://dev.farmstock.in/media/__sized__/listing/imagetype/RJjYbnPYRW20cPczUQz7Fg-thumbnail-700x700.png`}
                />
                <Typography className={classes.subHeaing}>10 ltrs Milk, तीसरा ब्यात, Rs 70,000</Typography>
                <Typography className={classes.subHeaing}>Gorakhpur, UP, 110044</Typography>
            </Box>
            <Typography className={classes.boldText}>Apna pashu ka ordertrack karne k liea click kare</Typography>
        </Box>
    );
};
// const CongratsPage = (props) => {
//     return (
//         <>
//             <img
//                 style={{ width: "80%", height: "40%" }}
//                 src={`https://dev.farmstock.in/media/__sized__/listing/cattlelistingimage/ZII6hfn9QDaBwkTUmrgiQA-thumbnail-700x700.png`}
//             />
//             <h5 className="  text-center p-2">
//                 {props.location.state.postdata.name} ji, Congratulations
//             </h5>
//             <h5 className="text-center ">
//                 Your post is publicy available. you will get call from the
//                 customers soon
//             </h5>
//             <div className=" container-md mt-3 bg-blue ">
//                 <h6 className="text-center">
//                     This, Sahiwal Cow{props.location.state.postdata.breed} is
//                     available for sale on Krishify
//                 </h6>
//                 <div style={{ backgroundColor: "grey" }}>
//                     <img
//                         style={{ width: "100%" }}
//                         src={props.location.state.img.front}
//                     />
//                 </div>

//                 <h6 className="text-center">
//                     {props.location.state.postdata.milking_capacity}, ltrs milk,
//                     Pregnency count{" "}
//                     {props.location.state.postdata.pregnancy_count}, Rs
//                     {props.location.state.postdata.rate}
//                 </h6>
//                 <h6 className="text-center ">Gorakpur, Up, 110044</h6>
//                 <h8 className="text-center ">
//                     Track your cattle order, Click here
//                 </h8>
//                 <br />
//                 <a href=""> click here</a>
//             </div>
//         </>
//     );
// };
export default CongratsPage;
