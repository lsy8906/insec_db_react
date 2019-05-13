import axios from 'axios'

export function trainingView() {
    return axios.get('/training-dates')
}