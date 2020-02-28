import axios from 'axios'

function axiosWithAuth() {
    const token = window.localStorage.getItem('token')
    
    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'http://localhost:5000'
    })
}

export default axiosWithAuth