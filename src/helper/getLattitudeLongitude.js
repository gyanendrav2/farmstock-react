import { toast } from 'react-toastify';

export const getLocation = () => {
    if (navigator.geolocation) {
        const result = navigator.geolocation.getCurrentPosition(showCurrentLocation);
        console.log("result", result)
    } else {
        toast.success('Geolocation is not supported by this browser.',  { position: 'top-center' });
    }
};

export const showCurrentLocation = (position) => {
    saveLatLong([position.coords.longitude, position.coords.latitude])
}

export const saveLatLong = (data) => {
   localStorage.setItem("latlong", JSON.stringify(data))
}

export const getLatLong = () => {
    const data = localStorage.getItem("latlong");
    const parsedData = JSON.parse(data);
    if(parsedData){
        return parsedData.join(',');
    }else {
        return '0,0';
    }

 }