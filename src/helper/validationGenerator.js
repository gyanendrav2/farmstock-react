import * as yup from 'yup';

export const validationGenerator = (data) => {
    const generateValidation = {};
    data.forEach((item, i) => {
        if (i !== 0 && item.is_compulsory) {
            generateValidation[item.feature] = yup
                .string()
                .required(item.error ? item.error : 'This is a required field.');
        }
    });

    return generateValidation;
};
