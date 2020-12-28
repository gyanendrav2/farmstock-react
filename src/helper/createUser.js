import { toast } from 'react-toastify';
import { createNewUserAPIcall, createNewPublicPostAPIcall } from '../redux/actions/animalActions';
import { routeEndpoints } from '../routes/routeEndpoints';

export const createUser = async (
    data,
    imageUploaded,
    resetUploaded,
    resetForm,
    resetImage,
    uploadedImages,
    moreInfo,
    history
) => {
    const information = { ...data, ...moreInfo };
    const createUserData = {
        full_name: data.userName,
        phone_number: data.phoneNumber,
    };
    if (imageUploaded.length) {
        const result = await createNewUserAPIcall(createUserData);
        if (result.status === 200) {
            delete data.userName;
            delete data.phoneNumber;
            delete data.location;
            delete data.state;
            delete data.district;
            const postAnimal = {
                location: '85.7119417, 23.5330837',
                images: imageUploaded,
                user: result.data.id,
                ...data,
            };
            const postResult = await createNewPublicPostAPIcall(postAnimal);
            if (postResult.data) {
                toast.success('Your post is successfully submitted.');
                resetUploaded([]);
                resetImage({ label: '', images: [] });
                resetForm();
                history.push({
                    pathname: routeEndpoints.congratulation,
                    state: {
                        info: {
                            images: uploadedImages,
                            userInfo: information,
                        },
                    },
                });
            } else {
                toast.success('Failed! something went wrong.');
            }
        }
    } else {
        toast.success('कृपया अपने पशु की फोटो डाले!');
    }
};
