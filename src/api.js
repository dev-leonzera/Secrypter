import axios from 'axios'


const api = axios.create({
    baseURL: "https://api-secrypter.herokuapp.com/"
});


export default api