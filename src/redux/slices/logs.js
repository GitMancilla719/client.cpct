import { createSlice } from '@reduxjs/toolkit'
import { getLogs, addLogs } from '../thunk/logs'

export const logSlice = createSlice({
  name: 'logs',
  initialState: {
    logs: [],
    add_logs_status: ''
  },
  extraReducers: {
    [getLogs.fulfilled]: (state, action) => {
      state.logs = action.payload
    },
    [getLogs.rejected]: (state, action) => {
      state.logs = action.payload
    },
    /// //////////////////////////////////////////////
    [addLogs.fulfilled]: (state, action) => {
      state.add_logs_status = action.payload
    },
    [addLogs.rejected]: (state, action) => {
      state.add_logs_status = action.payload
    }
  }
})

export default logSlice.reducer
