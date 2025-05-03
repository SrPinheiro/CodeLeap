import axios from "axios"

const getAxios = () => {
    const apiURL = process.env.REACT_APP_API_URL ?? ''

    const customAxios = axios.create({
        baseURL: apiURL,
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return customAxios;
}

export { getAxios }
