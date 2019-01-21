import axios from 'axios';
import appConfig from 'appConfig';

const httpRequests = {

    customerLogin: data => axios.post(`${appConfig.api_base_url}/api/v1/login`, data),
    
    verifyPhone: data => axios.post(`${appConfig.api_base_url}/api/v1/verify`, data),
};

export default httpRequests;
