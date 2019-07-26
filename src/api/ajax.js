import axios from 'axios'

export default function ajax(url, data={}, type="GET") {
  if(type === 'GET') {
    return axios.get(url, {
      params: data
    })
    // .then((res) => {
    //   if(res.status === 201) {
    //     console.log(res.data)
    //     return res.data
    //   }
    // }).catch((err) => {
    //   console.log(err)
    // })
  } else if (type === 'POST') {
    return axios.post(url, data)
  }
}