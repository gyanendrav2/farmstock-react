import { toast } from 'react-toastify';
import { createNewUserAPIcall, createNewPublicPostAPIcall } from '../redux/actions/animalActions';
import { routeEndpoints } from '../routes/routeEndpoints';
import { getLatLong } from './getLattitudeLongitude';

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
                location: getLatLong(),
                images: imageUploaded,
                user: result.data.id,
                ...data,
            };
            const postResult = await createNewPublicPostAPIcall(postAnimal);
            if (postResult.data) {
                resetUploaded([]);
                resetImage({ label: '', images: [] });
                resetForm();
                setTimeout(() => {
                    history.push({
                        pathname: routeEndpoints.congratulation,
                        state: {
                            info: {
                                images: uploadedImages,
                                userInfo: { ...information, postId: postResult.data.id },
                            },
                        },
                    });
                }, 1000);
            } else {
                toast.success('Failed! something went wrong.', { position: 'top-center' });
            }
        }
    } else {
        toast.success('कृपया अपने पशु की फोटो डाले!',  { position: 'top-center' });
    }
};
