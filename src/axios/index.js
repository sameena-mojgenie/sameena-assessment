import axios from 'axios'

  const instance = axios.create({
    baseURL: 'https://the-one-api.dev/v2',
})

instance.defaults.headers.common['Accept'] = 'application/json'
instance.defaults.headers.common['Authorization'] = `Bearer h4ZojzjHrXDffMaDUnPn`

export default instance
