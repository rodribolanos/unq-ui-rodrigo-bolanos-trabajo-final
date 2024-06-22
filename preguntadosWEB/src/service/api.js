import axios from "axios";

const urlAPI = 'https://preguntados-api.vercel.app';

const get = (url) => axios.get(url);
const post = (url, body) => axios.post(url, body);

export const getDifficulty = () => get(urlAPI+'/api/difficulty');
export const getQuestions = (difficulty) => get(urlAPI+'/questions?difficulty='+difficulty);
export const postAnswer = (body) => post(urlAPI+'/answer', body);

// TODO tener en cuenta: El body esperable por la API para la answer es: { questionId, option }