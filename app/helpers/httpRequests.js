import axios from 'axios';

const httpRequests = {
    getUsers: () => axios.get('https://reqres.in/api/users?page=2'),
};

export default httpRequests;
