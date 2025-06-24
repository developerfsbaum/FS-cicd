import axios from 'axios'

const baseURL = 'http://18.199.101.32:4000'

export const postTask = async (reqBody) => {
    const {data} = await axios.post(`${baseURL}/tasks`,reqBody)
    return data
}

export const getTasks = async () => {
    const {data} = await axios.get(`${baseURL}/tasks`)
    return data
}

export const deleteTask = async (taskID) => {
    const {data} = await axios.delete(`${baseURL}/tasks/${taskID}`)
    return data
}

export const postName = async (reqBody) => {
    const {data} = await axios.post(`${baseURL}/names`,reqBody)
    return data
}

export const getNames = async () => {
    const {data} = await axios.get(`${baseURL}/names`)
    return data
}

export const deleteName = async (nameID) => {
    const {data} = await axios.delete(`${baseURL}/names/${nameID}`)
    return data
}
