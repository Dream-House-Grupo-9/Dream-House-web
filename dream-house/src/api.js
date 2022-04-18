import axios from 'axios';

const api = axios.create({
    baseUrl: "localhost:8080/detalhes-anuncio"
    // baseUrl: "localhost:8080/anuncios"
})

export default api;