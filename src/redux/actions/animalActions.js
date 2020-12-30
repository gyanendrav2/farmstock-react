import { toast } from 'react-toastify';
import { getLatLong } from '../../helper/getLattitudeLongitude';
import { API } from '../../utility/API';
import { apiEndpoints } from '../../utility/apiEndpoints';
import { IMAGE_UPLOADING } from '../actionTypes/animalTypes';
import { dispatch } from '../store/Store';
import { loaderMessages, setBackgroundColor, spinner } from './uiAction';

export const fetcher = (url) => API.get(url).then((res) => res.data);

export const createNewUserAPIcall = async (data) => {
    dispatch(spinner(true));
    const result = await API.post(apiEndpoints.createUser, data).then((res) => res);
    dispatch(spinner(false));
    return result;
};

export const createNewPublicPostAPIcall = async (data) => {
    dispatch(setBackgroundColor('#fff'));
    dispatch(loaderMessages(['कृपया प्रतीक्षा करें 🙏', 'बिक्री के लिए आपके पशु 🐄 🐃  की पोस्ट बनाई जा रही है ']));
    dispatch(spinner(true));

    // const toastId = toast.success('कृपया प्रतीक्षा करें 🙏 बिक्री के लिए आपके पशु 🐄 🐃  की पोस्ट बनाई जा रही है ', {
    //     autoClose: false,
    //     position: 'top-center',
    //     delay: 0
    // });
    const result = await API.post(apiEndpoints.publicPost, data).then((res) => res);
    // toast.dismiss(toastId);
    setTimeout(() => {
        dispatch(setBackgroundColor(''));
        dispatch(loaderMessages(null));
        dispatch(spinner(false));
    }, 800);

    return result;
};

export const getAnimalThumbnailAPIcall = async (id) => {
    dispatch(spinner(true));
    const result = await API.get(apiEndpoints.featureAnimal + `${id}&point=85.6127226%2C23.5749498`).then((res) => res);
    dispatch(spinner(false));
    return result;
};

export const uploadAnimalImagesAPIcall = async (file, payload) => {
    dispatch(imageUploading(true));
    dispatch(imageUploadingStatus(true, payload));
    const data = new FormData();
    data.append('image', file, file.name);
    data.append('image_type', '499f6c50-230d-4578-aacb-ea9ae2878619');
    const result = await API.post(apiEndpoints.listingCattleImage, data).then((res) => res);
    dispatch(imageUploading(false));
    dispatch(imageUploadingStatus(false, payload));
    return result;
};

export const getAllDistrictAPIcall = async (id) => {
    dispatch(spinner(true));
    const result = await API.get(apiEndpoints.district + id).then((res) => res);
    dispatch(spinner(false));
    return result;
};

export const getAllBlocksAPIcall = async (id) => {
    dispatch(spinner(true));
    const result = await API.get(apiEndpoints.block + id).then((res) => res);
    dispatch(spinner(false));
    return result;
};

export const getAllPostInfoAPIcall = async (id) => {
    dispatch(spinner(true));
    const result = await API.get(apiEndpoints.postInfo + id + '?=&point=' + getLatLong()).then((res) => res);
    dispatch(spinner(false));
    return result;
};

export const imageUploading = (data) => {
    return {
        type: IMAGE_UPLOADING,
        payload: data,
    };
};

export const imageUploadingStatus = (data, actionType) => {
    return {
        type: actionType,
        payload: data,
    };
};
