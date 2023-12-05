import Axios from 'axios'

const API_URL =
  'http://api.teste-frontend.ateliedepropaganda.com.br/v1/register'


export const api = axios.create({
    baseURL: 'http://api.teste-frontend.ateliedepropaganda.com.br/v1/register'
})

//campos do formulario

export const register = (
  name,
  email,
  tax_id,
  password,
  password_confirmation,
  company,
  segment,
) => {
  return axios.post(API_URL, {
    name,
    email,
    tax_id,
    password,
    password_confirmation,
    company,
    segment,
  })
}

export const login = (email, password) => {
  return axios.post(API_URL, {
    email,
    password,
  })
}

export const getallRegister = () => {
  return Axios.get(API_URL)
}

console.log(register)
console.log(login)
