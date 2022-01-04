import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const BASE_URL = 'https://api-cpct.herokuapp.com'

export const login = createAsyncThunk(
  'admin/login',
  async creds => {
    try {
      const login = await axios.post(
        `${BASE_URL}/admin/login`,
        creds
      )

      localStorage.setItem(
        'access_token',
        login.data.access_token.access_token
      )

      delete login.data.access_token.access_token
      delete login.data.access_token.username

      localStorage.setItem(
        'profile',
        JSON.stringify(login.data.access_token)
      )
      return login.data
    } catch (error) {
      return error
    }
  }
)

export const getAdmins = createAsyncThunk(
  'admin/getAdmins',
  async () => {
    try {
      const token = localStorage.getItem('access_token')
      const response = await axios.get(`${BASE_URL}/admin`, {
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

export const deleteAdmin = createAsyncThunk(
  'admin/deleteAdmin',
  async adminId => {
    try {
      const token = localStorage.getItem('access_token')
      const response = await axios.delete(
        `${BASE_URL}/admin?id=${adminId}`,
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

export const addAdmin = createAsyncThunk(
  'admin/addAdmin',
  async payload => {
    try {
      const token = localStorage.getItem('access_token')
      const response = await axios.post(
        `${BASE_URL}/admin/register`,
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

export const updateAdmin = createAsyncThunk(
  'admin/updateAdmin',
  async data => {
    try {
      // console.log(data)
      const token = localStorage.getItem('access_token')
      const response = await axios.put(
        `${BASE_URL}/admin?id=${data.id}}`,
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
