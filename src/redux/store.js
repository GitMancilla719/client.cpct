import {
  configureStore,
  combineReducers
} from '@reduxjs/toolkit'
import { adminSlice } from './slices/administrator'
import { facilitiesSlice } from './slices/facilities'
import { logSlice } from './slices/logs'
import { recordSlice } from './slices/records'
import { vaccinationSlice } from './slices/vaccination'

const store = configureStore({
  reducer: combineReducers({
    admin: adminSlice.reducer,
    logs: logSlice.reducer,
    records: recordSlice.reducer,
    vaccinations: vaccinationSlice.reducer,
    facilities: facilitiesSlice.reducer
  })
})

export default store
