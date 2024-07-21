import axios from "axios"

const Axios = axios.create({
  baseURL: "https://api.currentsapi.services/v1/",
  params: {
    apiKey: process.env.API_KEY,
  },
})

export default Axios
