import axios from 'axios'


const API = axios.create({ baseURL: 'https://reachme.thesak.online' });
API.interceptors.request.use((req) => {

    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    } else {
        localStorage.clear();
    }
    return req
})

export const getMessages = (id) => API.get(`/message/${id}`)

export const addMessage = (data) => API.post('/message/', data)