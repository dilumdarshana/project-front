import axios from 'axios';
import appConfig from 'appConfig';

const lstApiUrl = `${appConfig.api_base_url}/${appConfig.api_prefix}`;

const httpRequests = {

    customerLogin: data => axios.post(`${lstApiUrl}/login`, data),

    verifyPhone: data => axios.post(`${lstApiUrl}/verify`, data),
};

export default httpRequests;
