import axios from "axios"
// https://api.themoviedb.org/3/movie/550?api_key=7cc580ec884f302a3cdc282d4a1afe5f
const client = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default client