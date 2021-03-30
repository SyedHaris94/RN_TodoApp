import axios from "axios";

import { TOKEN_BASE, AUTHORIZATION } from "../constant";
import config from "../config";
axios.defaults.baseURL = config.APP_API_URL;
axios.interceptors.request.use(
  (configuration) => {
    const token = config.APP_TOKEN;
    if (token) {
      configuration.headers[AUTHORIZATION] = `${TOKEN_BASE} ${token}`;
    }
    return configuration;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) {
      return Promise.reject("network error");
    }
    if (error.response.status === 401) {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);