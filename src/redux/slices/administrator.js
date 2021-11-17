import { createSlice } from '@reduxjs/toolkit'
// eslint-disable-next-line no-unused-vars
import {
  login,
  getAdmins,
  deleteAdmin,
  addAdmin,
  updateAdmin
} from '../thunk/administrator'

export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    loginState: '',
    admin_list: [],
    admin_delete: '',
    add_admin: '',
    update_admin: ''
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.loginState = action.payload
    },
    [login.rejected]: (state, action) => {
      localStorage.removeItem('access_token')
      localStorage.removeItem('profile')
      state.loginState = false
    },
    /// //////////////////////////////////////////////
    [getAdmins.fulfilled]: (state, action) => {
      state.admin_list = action.payload
    },
    [getAdmins.rejected]: (state, action) => {
      state.admin_list = []
    },
    /// //////////////////////////////////////////////
    [deleteAdmin.fulfilled]: (state, action) => {
      state.admin_delete = action.payload
    },
    [deleteAdmin.rejected]: (state, action) => {
      state.admin_delete = action.payload
    },
    /// //////////////////////////////////////////////
    [addAdmin.fulfilled]: (state, action) => {
      state.admin_delete = action.payload
    },
    [addAdmin.rejected]: (state, action) => {
      state.admin_delete = action.payload
    },
    /// //////////////////////////////////////////////
    [updateAdmin.fulfilled]: (state, action) => {
      state.admin_delete = action.payload
    },
    [updateAdmin.rejected]: (state, action) => {
      state.admin_delete = action.payload
    }
  }
})

export default adminSlice.reducer
