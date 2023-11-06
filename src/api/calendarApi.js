import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL_LOCAL } = getEnvVariables();

const calendarApi = axios.create({
  baseURL: VITE_API_URL_LOCAL,
});

// Todo: Configurar interceptores

export default calendarApi;
