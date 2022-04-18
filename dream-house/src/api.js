import axios from 'axios';

const api = axios.create({
    baseUrl: "localhost:8080/anuncios"
    // baseUrl: "localhost:8080/detalhes-anuncio"
})

export default api;