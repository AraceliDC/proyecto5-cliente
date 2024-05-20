import axios from 'axios'

const axiosClient = axios.create({
    baseURL: process.env.VITE_BACKEND_URL
})

export default axiosClient