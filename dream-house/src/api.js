import axios from 'axios';

const Api = axios.create({

    baseURL: "http://44.213.42.99:8002"
   //  headers: {
    //     'Access-Control-Allow-Origin': '*',
     //    "Content-Type": "application/json;charset=UTF-8"
    //   } 
  

});

export default Api;
