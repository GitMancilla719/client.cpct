import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const BASE_URL = 'https://api-cpct.herokuapp.com'

export const getLogs = createAsyncThunk(
  'logs/getLogs',
  async () => {
    try {
      const token = localStorage.getItem('access_token')
      const response = await axios.get(`${BASE_URL}/logs`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      return response.data
    } catch (error) {
      return error
    }
  }
)

export const addLogs = createAsyncThunk(
  'logs/addLogs',
  async payload => {
    try {
      const token = localStorage.getItem('access_token')
      const response = await axios.post(
        `${BASE_URL}/logs`,
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
