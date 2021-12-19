import axios from 'axios';
import { sqlConfig } from '../apiKeys';

const dbUrl = sqlConfig.sqlDatabaseUrl;

const getAllIdeas = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/ideas`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getSingleIdea = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/ideas/${id}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createNewIdea = (newIdea) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/ideas`, newIdea)
    .then(() => {
      getAllIdeas().then((response) => resolve(response));
    })
    .catch((error) => reject(error));
});

const updateIdea = (id, updatedIdea) => new Promise((resolve, reject) => {
  axios.put(`${dbUrl}/ideas/${id}`, updatedIdea)
    .then(() => {
      getAllIdeas().then((response) => resolve(response));
    })
    .catch((error) => reject(error));
});

const deleteIdea = (id) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/ideas/${id}`)
    .then(() => {
      getAllIdeas().then((response) => resolve(response));
    })
    .catch((error) => reject(error));
});

export {
  getAllIdeas,
  getSingleIdea,
  createNewIdea,
  updateIdea,
  deleteIdea
};
