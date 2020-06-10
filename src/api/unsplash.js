import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID CxK7M7X2NlXSMfWpU8Kuh_lFd_EhiMvVAbleBNMe9gU',
  },
})
