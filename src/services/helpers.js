import axios from 'axios';

class HttpHelpers {
  constructor() {
    this.apiBaseUrl = process.env.REACT_APP_API_URL;
    this.axiosInterceptor = axios.create({ baseURL: this.apiBaseUrl });
    this.addAxiosInterceptor();
  }

  addAxiosInterceptor() {
    this.axiosInterceptor.interceptors.request.use(
      async (config) => {
        return config;
      },
      (error) => Promise.reject(error),
    );
  }
}

export default new HttpHelpers();
