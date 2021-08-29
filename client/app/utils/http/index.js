const axios = require('axios');
const errorLog = require('debug')('web:error');
// no-unused-vars
const api = (req, res, next) => {
  const API = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:4040',
  });

  API.interceptors.response.use(
    (response) => (response ? response.data : {}),
    (error) => {
      errorLog(`${error} from axios`);
    },
  );

  API.interceptors.request.use(async (config) => {
    const { token } = req.session;

    if (!token) {
      return config;
    }

    return {
      ...config,
      headers: {
        common: { token },
      },
    };
  });
  req.API = API;
  next();
};

module.exports = api;
