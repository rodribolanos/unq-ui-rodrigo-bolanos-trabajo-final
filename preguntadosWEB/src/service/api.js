import axios from "axios";

const urlAPI = 'https://preguntados-api.vercel.app';

const get = (url) => axios.get(url);
const post = (url, body) => axios.post(url, body);

export const getDifficulty = () => get(urlAPI+'/api/difficulty');
export const getQuestions = (difficulty) => get(urlAPI+'/api/questions?difficulty='+difficulty);
export const postAnswer =   (body) => post(urlAPI+'/api/answer', body);

