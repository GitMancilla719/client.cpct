import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const BASE_URL = 'https://api-cpct.herokuapp.com'

export const getFacilities = createAsyncThunk(
  'facilities/getFacilities',
  async (hospital = '') => {
    try {
      const token = localStorage.getItem('access_token')
      const response = await axios.get(
        `${BASE_URL}/facilities?hospital=${hospital}`,
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

export const addFacilities = createAsyncThunk(
  'facilities/addFacilities',
  async payload => {
    try {
      const token = localStorage.getItem('access_token')
      const response = await axios.post(
        `${BASE_URL}/facilities`,
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

export const deleteFacilities = createAsyncThunk(
  'facilities/deleteFacilities',
  async hospital => {
    try {
      const token = localStorage.getItem('access_token')
      const response = await axios.delete(
        `${BASE_URL}/facilities?hospital=${hospital}`,
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

export const updateFacilities = createAsyncThunk(
  'facilities/updateFacilities',
  async payload => {
    try {
      const token = localStorage.getItem('access_token')
      const response = await axios.put(
        `${BASE_URL}/facilities?hospital=${payload.hospitalName}`,
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

export const getFacilitiesStats = createAsyncThunk(
  'facilities/getFacilitiesStats',
  async () => {
    try {
      const token = localStorage.getItem('access_token')
      const response = await axios.get(
        `${BASE_URL}/facilities/stats`,
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
