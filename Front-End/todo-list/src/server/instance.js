import axios from 'axios';

/**
 * Instancia de acesso aos endpoints
 */

const api = axios.create({
    baseURL: "/api"
});

export default api;