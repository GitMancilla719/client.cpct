import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const BASE_URL = 'https://api-cpct.herokuapp.com'

export const getVacs = createAsyncThunk(
  'vaccination/getVacs',
  async () => {
    try {
      const token = localStorage.getItem('access_token')
      const response = await axios.get(
        `${BASE_URL}/vaccination`,
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      )
      return response.data
    } catch (error) {
      return error
    }
  }
)

export const updateVacs = createAsyncThunk(
  'vaccination/updateVacs',
  async payload => {
    try {
      const token = localStorage.getItem('access_token')
      const response = await axios.put(
        `${BASE_URL}/vaccination`,
        payload,
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      )
      return response.data
    } catch (error) {
      return error
    }
  }
)
