import axios from "axios"

const Requests = axios.create({
    timeout: 20000,
    withCredentials: true,
})

export default Requests