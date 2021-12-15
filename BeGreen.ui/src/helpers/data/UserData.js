import axios from 'axios';
import { sqlConfig } from '../apiKeys';

const dbUrl = sqlConfig.sqlDatabaseUrl;

const getFirebaseUser = (fbUserId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users/fb/${fbUserId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createUser = (newUser) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/users`, newUser)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export { createUser, getFirebaseUser };
