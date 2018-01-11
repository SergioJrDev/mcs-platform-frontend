import axios from 'axios'
import API_CONFIG from './../API_CONFIG'
import { TransformPaymentRequest } from './../utils'

class UserInfo {
  static getUser(user = '') {
    return new Promise((resolve, reject) => {
      axios.get(`${API_CONFIG.CLOSE_API}/userinfo/searchbyname?user=${user}`)
        .then(resolve)
        .catch(reject)
    })
  }

  static getUserID(user = '') {
    return new Promise((resolve, reject) => {
      axios.get(`${API_CONFIG.CLOSE_API}/userinfo/searchid?email=${user}`)
        .then(resolve)
        .catch(reject)
    })
  }

  static createUser(values) {
    return this.submitUser(values, 'post')
  }

  static updateUser(values) {
    return this.submitUser(values, 'put')
  }

  static submitUser(values, method) {
    const id = values._id || ''
    return new Promise((resolve, reject) => {
      axios[method](`${API_CONFIG.CLOSE_API}/userinfo/${id}`, values)
        .then(resolve)
        .catch(reject)
    })
  }

  static getUserInfo(user = '') {
    return new Promise((resolve, reject) => {
      axios.get(`${API_CONFIG.CLOSE_API}/payment/search?user=${user}`)
        .then(({ data }) => data)
        .then(TransformPaymentRequest)
        .then(resolve)
        .catch(reject)
    })
  }

  static getUserByEmail(email = '') {
    return new Promise((resolve, reject) => {
      axios.get(`${API_CONFIG.CLOSE_API}/userinfo/searchbyemail?email=${email}`)
        .then(({ data }) => data)
        .then(resolve)
        .catch(reject)
    })
  }

  static throwPayment(data) {
    return new Promise((resolve, reject) => {
      axios.post(`${API_CONFIG.CLOSE_API}/payment`, data)
        .then(resolve)
        .catch(reject)
    })
  }
}

export default UserInfo