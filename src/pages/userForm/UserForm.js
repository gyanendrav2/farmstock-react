import React from 'react';
// import ImageCard from '../../components/card/imageCard';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { userFormValidation } from '../../formValidation/userFormValidation';
import { Box, makeStyles, Typography } from '@material-ui/core';
import UserDetails from './UserDetails';
import AnimalDetails from './AnimalDetails';

const useStyles = makeStyles({
    wrapper: {
        maxWidth: '70%',
        margin: 'auto',
    },
});

const UserForm = () => {
    const classes = useStyles();
    const { register, errors, handleSubmit } = useForm({
        resolver: yupResolver(userFormValidation),
    });

    const formSubmit = (data) => {
        console.log(data);
    };

    return (
        <Box className={classes.wrapper}>
            <form onSubmit={handleSubmit(formSubmit)}>
                <Typography className="text-center p-2">
                    Your post is seen on the Krishify network whole, this will increase the your chance
                </Typography>
                <UserDetails inputRegister={register} errors={errors} />
                <AnimalDetails inputRegister={register} errors={errors} />
            </form>
        </Box>
    );
};

export default UserForm;
