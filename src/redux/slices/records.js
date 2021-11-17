import { createSlice } from '@reduxjs/toolkit'
import {
  getRecords,
  getLocRecords,
  deleteLocRecords,
  addLocRecords,
  updateLocRecords
} from '../thunk/records'

export const recordSlice = createSlice({
  name: 'records',
  initialState: {
    all_records: [],
    loc_records: null,
    delete_loc: null,
    add_loc: null,
    update_loc: null
  },
  extraReducers: {
    [getRecords.fulfilled]: (state, action) => {
      state.all_records = action.payload
    },
    [getRecords.rejected]: (state, action) => {
      state.all_records = action.payload
    },
    /// //////////////////////////////////////////////
    [getLocRecords.fulfilled]: (state, action) => {
      state.loc_records = action.payload
    },
    [getLocRecords.rejected]: (state, action) => {
      state.loc_records = action.payload
    },
    /// //////////////////////////////////////////////
    [deleteLocRecords.fulfilled]: (state, action) => {
      state.delete_loc = action.payload
    },
    [deleteLocRecords.rejected]: (state, action) => {
      state.delete_loc = action.payload
    },
    /// //////////////////////////////////////////////
    [addLocRecords.fulfilled]: (state, action) => {
      state.add_loc = action.payload
    },
    [addLocRecords.rejected]: (state, action) => {
      state.add_loc = action.payload
    },
    /// //////////////////////////////////////////////
    [updateLocRecords.fulfilled]: (state, action) => {
      state.update_loc = action.payload
    },
    [updateLocRecords.rejected]: (state, action) => {
      state.update_loc = action.payload
    }
  }
})

export default recordSlice.reducer
