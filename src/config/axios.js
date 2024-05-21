import axios from 'axios'

const axiosClient = axios.create({
    baseURL: process.env.BACKEND_URL
})

axios.get(process.env.BACKEND_URL)
  .catch(function (error) {
    console.log(error);
  });

export default axiosClient