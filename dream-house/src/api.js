import axios from 'axios';

const Api = axios.create({
    baseUrl: "localhost:8080/anuncios"
    // baseUrl: "localhost:8080/detalhes-anuncio"
})

export default Api;