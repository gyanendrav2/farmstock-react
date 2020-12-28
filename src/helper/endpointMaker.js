export const endpointMaker = (endpoint, param) => {
    if (![null, undefined, ''].includes(param)) {
        return endpoint + param;
    } else {
        return null;
    }
};
