import axios from 'axios';
import { sqlConfig } from '../apiKeys';

const dbUrl = sqlConfig.sqlDatabaseUrl;

// TREE ACTIVITIES
const getAllTreeActivities = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/treeActivity`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getUsersTreeActivities = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/treeActivity/user/${userId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// TREE PICTURE
const getWholeTreePicture = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/tree`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getTreePictureSection = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/tree/${id}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getAllTreeActivities,
  getUsersTreeActivities,
  getWholeTreePicture,
  getTreePictureSection
};
