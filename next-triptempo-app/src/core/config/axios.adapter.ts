import axios from 'axios';

// const URL = 'https://triptempo-server.up.railway.app/api/v1';
const URL = 'http://localhost:3000/api/v1';

const API = axios.create({ baseURL: URL });

export { API };
