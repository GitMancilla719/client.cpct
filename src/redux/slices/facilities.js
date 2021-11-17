import { createSlice } from '@reduxjs/toolkit'
import {
  addFacilities,
  deleteFacilities,
  getFacilities,
  getFacilitiesStats,
  updateFacilities
} from '../thunk/facilities'

export const facilitiesSlice = createSlice({
  name: 'facilities',
  initialState: {
    facilities: '',
    add_facilities: '',
    delete_facilities: '',
    update_facilities: '',
    facilities_stats: ''
  },
  extraReducers: {
    [getFacilities.fulfilled]: (state, action) => {
      state.facilities = action.payload
    },
    [getFacilities.rejected]: (state, action) => {
      state.facilities = action.payload
    },
    /// //////////////////////////////////////////////
    [addFacilities.fulfilled]: (state, action) => {
      state.add_facilities = action.payload
    },
    [addFacilities.rejected]: (state, action) => {
      state.add_facilities = action.payload
    },
    /// //////////////////////////////////////////////
    [deleteFacilities.fulfilled]: (state, action) => {
      state.delete_facilities = action.payload
    },
    [deleteFacilities.rejected]: (state, action) => {
      state.delete_facilities = action.payload
    },
    /// //////////////////////////////////////////////
    [updateFacilities.fulfilled]: (state, action) => {
      state.update_facilities = action.payload
    },
    [updateFacilities.rejected]: (state, action) => {
      state.update_facilities = action.payload
    },
    /// //////////////////////////////////////////////
    [getFacilitiesStats.fulfilled]: (state, action) => {
      state.facilities_stats = action.payload
    },
    [getFacilitiesStats.rejected]: (state, action) => {
      state.facilities_stats = action.payload
    }
  }
})

export default facilitiesSlice.reducer
