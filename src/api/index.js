import axios from 'axios'

const apiUrl = 'https://pokeapi.co/api/v2/'

export function getData (page, limit) {
  const offset = page * limit
  return axios.get(`${apiUrl}pokemon/?offset=${offset}&limit=${limit}`)
}

export function getPokemon (url) {
  return axios.get(url)
}
