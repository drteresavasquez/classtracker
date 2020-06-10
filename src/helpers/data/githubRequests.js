import axios from 'axios';
import apiKeys from '../apiKeys';
import Keys from './../Keys.js';

const baseUrl = !window.location.href.includes("localhost") ? apiKeys.githubProxyUrl : Keys.githubProxyUrl;

const getRecentActivityRequest = githubUsername => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/recent_activity/${githubUsername}`)
    .then(res => resolve(res.data))
    .catch(err => reject(err));
});

const getUser = githubUsername => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/get_github_user/${githubUsername}`)
    .then(res => resolve(res.data))
    .catch(err => reject(err));
});

export default { getRecentActivityRequest, getUser };
