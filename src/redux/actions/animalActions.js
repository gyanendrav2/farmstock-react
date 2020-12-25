import { API } from "../../utility/API";

export const fetcher = url => API.get(url).then(res=>res.data);