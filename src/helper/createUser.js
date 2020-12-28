import { toast } from 'react-toastify';
import { createNewUserAPIcall, createNewPublicPostAPIcall } from '../redux/actions/animalActions';

export const createUser = async (data, imageUploaded, resetUploaded, resetForm, resetImage) => {
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
            const postAnimal = {
                location: '85.7119417, 23.5330837',
                images: imageUploaded,
                user: result.data.id,
                ...data,
            };
         

            console.log("postAnimal", postAnimal)
            const postResult = await createNewPublicPostAPIcall(postAnimal);
            if (postResult.data) {
                toast.success('Your post is successfully submitted.');
                resetUploaded([]);
                resetImage({ label: '', images: [] });
                resetForm({
                    userName: '',
                    phoneNumber: '',
                    pickAnimal: '',
                    Rate: '',
                    Breed: '',
                    'Pregnancy Count': '',
                    Age: '',
                    'Current Milking': '',
                    'Milking Capacity': '',
                    Pregnancy_Month: '',
                    'Calf Status': '',
                    More_Info: '',
                });
            } else {
                toast.success('Failed! something went wrong.');
            }
        }
    } else {
        toast.success('कृपया अपने पशु की फोटो डाले!');
    }
};
