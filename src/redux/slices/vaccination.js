import { createSlice } from '@reduxjs/toolkit'
import { getVacs, updateVacs } from '../thunk/vaccination'

export const vaccinationSlice = createSlice({
  name: 'vaccination',
  initialState: {
    vacs: '',
    update_vacs: ''
  },
  extraReducers: {
    [getVacs.fulfilled]: (state, action) => {
      state.vacs = action.payload
    },
    [getVacs.rejected]: (state, action) => {
      state.vacs = action.payload
    },
    /// //////////////////////////////////////////////
    [updateVacs.fulfilled]: (state, action) => {
      state.update_vacs = action.payload
    },
    [updateVacs.rejected]: (state, action) => {
      state.update_vacs = action.payload
    }
  }
})

export default vaccinationSlice.reducer
