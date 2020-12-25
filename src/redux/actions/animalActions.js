import { API } from '../../utility/API';
import { apiEndpoints } from '../../utility/apiEndpoints';
import { dispatch } from '../store/Store';
import { spinner } from './uiAction';

export const fetcher = (url) => API.get(url).then((res) => res.data);

export const createNewUserAPIcall = async (data) => {
    dispatch(spinner(true));
    const result = await API.post(apiEndpoints.createUser, data).then((res) => res);
    dispatch(spinner(false));
    return result;
};

export const createNewPublicPostAPIcall = async (data) => {
    dispatch(spinner(true));
    const result = await API.post(apiEndpoints.publicPost, data).then((res) => res);
    dispatch(spinner(false));
    return result;
};

export const getAnimalThumbnailAPIcall = async (id) => {
    dispatch(spinner(true));
    const result = await API.get(apiEndpoints.featureAnimal + `${id}&point=85.6127226%2C23.5749498`).then((res) => res);
    dispatch(spinner(false));
    return result;
};

export const uploadAnimalImagesAPIcall = async (file) => {
    dispatch(spinner(true));
    const data = new FormData();
    data.append('image', file, file.name);
    data.append('image_type', '499f6c50-230d-4578-aacb-ea9ae2878619');
    const result = await API.post(apiEndpoints.listingCattleImage, data, {
        headers: {
            authorization: 'Token fb9fd71361643c90167ec6a59cb129af4cd9a77f',
        },
    }).then((res) => res);
    dispatch(spinner(false));
    return result;
};
