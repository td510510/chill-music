import axios from 'axios'

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_HOST_API}/api`,
})

// custom response
instance.interceptors.response.use(
  (response) => {
    console.log('run axios')
    return response.data.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default instance
