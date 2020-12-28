import * as yup from 'yup';

export const validationGenerator = (data) => {
    const generateValidation = {};
    data.forEach((item, i) => {
        if (i !== 0 && item.is_compulsory && item.feature!=="location") {
            generateValidation[item.feature] = yup
                .string()
                .required(item.error ? item.error : 'This is a required field.');
        }
    });

    return generateValidation;
};
