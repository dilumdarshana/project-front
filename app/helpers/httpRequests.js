import axios from 'axios';
import appConfig from 'appConfig';

const httpRequests = {
    getUsers: () => axios.get('https://reqres.in/api/users?page=2'),

    customerLogin: data => axios.post(`${appConfig.api_base_url}/api/v1/login`, { phone: data }),
};

export default httpRequests;
