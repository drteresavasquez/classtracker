import axios from 'axios';
import baseUrl from './apiJunts';

const getAssignmentList = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/assignments.json`)
    .then((res) => {
      const assignments = [];
      const assignmentCollection = res.data;
      Object.keys(assignmentCollection).forEach((key) => {
        assignmentCollection[key].id = key;
        assignments.push(assignmentCollection[key]);
      });
      resolve(assignments);
    })
    .catch(err => reject(err));
});

const getGithubAssignmentList = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/assignments.json?orderBy="isGithub"&equalTo="true"`)
    .then((res) => {
      const assignments = [];
      const assignmentCollection = res.data;
      Object.keys(assignmentCollection).forEach((key) => {
        assignmentCollection[key].assignmentId = key;
        assignments.push(assignmentCollection[key]);
      });
      resolve(assignments);
    })
    .catch(err => reject(err));
});

const getSingleAssignmentById = assignmentId => axios.get(`${baseUrl}/assignments/${assignmentId}.json`);

export default {
  getAssignmentList,
  getGithubAssignmentList,
  getSingleAssignmentById,
};
