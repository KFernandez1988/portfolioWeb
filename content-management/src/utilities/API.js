import axios from "axios";


const api = axios.create({
    url: process.env.API_URL || "http://localhost:4040",
});

api.interceptors.response.use(
    (response) => (response ? response.data : {}),
    (error) => {
      console.log(`${error} from axios`);
    },
);
  
api.interceptors.request.use(async (config) => {
    const { token } = localStorage.get('token');

    if (!token) {
        return config
    };

    return {
        ...config,
        headers: { common: { token } }
    };
});

export default  api;