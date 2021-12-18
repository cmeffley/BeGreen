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

const getUserTotalTreePoints = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/treeActivity/totalTreePoints?userId=${userId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createNewActivity = (newActivity, userId) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/treeActivity`, newActivity)
    .then(() => {
      getUsersTreeActivities(userId).then((response) => resolve(response));
    })
    .catch((error) => reject(error));
});

const updateActivity = (id, updatedActivity) => new Promise((resolve, reject) => {
  axios.put(`${dbUrl}/treeActivity/${id}`, updatedActivity)
    .then(() => {
      getAllTreeActivities().then((response) => resolve(response));
    })
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
  getUserTotalTreePoints,
  createNewActivity,
  updateActivity,
  getWholeTreePicture,
  getTreePictureSection
};
