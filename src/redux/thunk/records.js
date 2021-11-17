import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const BASE_URL = 'https://api-cpct.herokuapp.com'

export const getRecords = createAsyncThunk(
  'records/getRecords',
  async () => {
    try {
      const token = localStorage.getItem('access_token')
      const response = await axios.get(`${BASE_URL}/records`, {
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

export const getLocRecords = createAsyncThunk(
  'records/getLocRecords',
  async loc => {
    try {
      const token = localStorage.getItem('access_token')
      const response = await axios.get(
        `${BASE_URL}/records/${loc}`,
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

export const deleteLocRecords = createAsyncThunk(
  'records/deleteLocRecords',
  async data => {
    try {
      const token = localStorage.getItem('access_token')
      const response = await axios.delete(
        `${BASE_URL}/records?location=${data.loc}&record=${data.id}`,
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

export const addLocRecords = createAsyncThunk(
  'records/addLocRecords',
  async data => {
    try {
      const token = localStorage.getItem('access_token')
      const response = await axios.patch(
        `${BASE_URL}/records/add-record/${data.loc}`,
        data.payload,
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

export const updateLocRecords = createAsyncThunk(
  'records/updateLocRecords',
  async data => {
    try {
      // console.log(data)
      const token = localStorage.getItem('access_token')
      const response = await axios.patch(
        `${BASE_URL}/records/update-record?location=${data.loc}&record=${data.id}`,
        data.payload,
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      )
      return response.data
    } catch (error) {
      return error.message
    }
  }
)
