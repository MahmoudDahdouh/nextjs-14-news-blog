import axios from "axios"

const Axios = axios.create({
  baseURL: process.env.BASE_URL,
  params: {
    apiKey: process.env.API_KEY,
  },
})

export default Axios
