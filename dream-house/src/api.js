import axios from 'axios';

const Api = axios.create({

    baseURL: "http://localhost:8080"
    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     "Content-Type": "application/json;charset=UTF-8"
    //   } 
  

});

export default Api;