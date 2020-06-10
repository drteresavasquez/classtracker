import axios from 'axios';
import apiKeys from '../apiKeys';
import Keys from './../Keys.js';

const baseUrl = !window.location.href.includes("localhost") ? apiKeys.firebaseConfig.databaseURL : Keys.firebaseConfig.databaseURL;

const getRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/students.json`)
    .then((res) => {
      const students = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((fbKey) => {
          res.data[fbKey].id = fbKey;
          students.push(res.data[fbKey]);
        });
      }
      resolve(students);
    })
    .catch(err => reject(err));
});

const getSingleStudentByUid = uid => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/students.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const students = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((fbKey) => {
          res.data[fbKey].id = fbKey;
          students.push(res.data[fbKey]);
        });
      }
      resolve(students[0]);
    })
    .catch(err => reject(err));
});

const getSingleStudentById = id => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/students/${id}.json`)
    .then((res) => {
      let student = {};
      if (res.data !== null) {
        student = res.data;
      }
      resolve(student);
    })
    .catch(err => reject(err));
});

const updateStudent = (id, student) => new Promise((resolve, reject) => {
  axios
    .put(`${baseUrl}/students/${id}.json`, student)
    .then(res => resolve(res))
    .catch(err => reject(err));
})

export default { getRequest, getSingleStudentByUid, getSingleStudentById, updateStudent };
