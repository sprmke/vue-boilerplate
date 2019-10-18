import axios from 'axios';

import { ENDPOINTS_POST } from './endpoints/endpoints-post';
import { ENDPOINTS_PUT } from './endpoints/endpoints-put';
import { ENDPOINTS_GET } from './endpoints/endpoints-get';
import { ENDPOINTS_DELETE } from './endpoints/endpoints-delete';

// API Settings
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {}
});

// Interceptors
const reqInterceptor = instance.interceptors.request.use(config => {
  // Do something before request is sent
  console.log('Request interceptor', config)
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

const resInterceptor = instance.interceptors.response.use(response =>  {
  // Do something with response data
  console.log('Response interceptor', response)
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

// Remove interceptors
instance.interceptors.request.eject(reqInterceptor);
instance.interceptors.response.eject(resInterceptor);

// API Call Types
export const API = {
  post(endpoint, formData) {
    return instance.post(endpoint, formData);
  },
  put(endpoint, formData) {
    return instance.put(endpoint, formData);
  },
  get(endpoint) {
    return instance.get(endpoint);
  },
  delete(endpoint) {
    return instance.delete(endpoint);
  }
}

// API Endpoints
export const ENDPOINTS = {
  ...ENDPOINTS_POST,
  ...ENDPOINTS_PUT,
  ...ENDPOINTS_GET,
  ...ENDPOINTS_DELETE
}