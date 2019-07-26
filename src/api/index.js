import ajax from './ajax'
const root = 'http://localhost:3001'
const login = (data) => ajax(`${root}/login`, data ,'POST')

export {
  login
}