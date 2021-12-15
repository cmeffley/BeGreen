import axios from 'axios';
import { sqlConfig } from '../apiKeys';

const dbUrl = sqlConfig.sqlDatabaseUrl;

const getAllQuizQuestions = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/quizQuestions`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getSingleQuizQuestion = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/quizQuestions/${id}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getSingleQuizResult = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/quizResults/${id}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export { getAllQuizQuestions, getSingleQuizQuestion, getSingleQuizResult };
