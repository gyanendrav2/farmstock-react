import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const userFormValidationGenerator = (validationObj) => {
    const userFormValidation = yup.object().shape({
        userName: yup.string().required('User Name is a required field.'),
        phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid').max(12),
        animal: yup.string().required('This is a required field.'),
        // Rate: yup.string().required('Rate is a required field.'),
        // Breed: yup.string().required('This is a required field.'),
        // 'Pregnancy Count': yup.string().required('This is a required field.'),
        // Age: yup.string().required('This is a required field.'),
        // 'Current Milking': yup.string().required('This is a required field.'),
        // 'Milking Capacity': yup.string().required('This is a required field.'),
        // Pregnancy_Month: yup.string().required('This is a required field.'),
        // 'Calf Status': yup.string().required('This is a required field.'),
        // More_Info: yup.string().required('This is a required field.'),
        ...validationObj,
    });

    return userFormValidation;
};
