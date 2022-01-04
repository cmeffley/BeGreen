import axios from 'axios';
import { sqlConfig } from '../apiKeys';

const dbUrl = sqlConfig.sqlDatabaseUrl;

const getAllResources = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/resources`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getAllResources;
