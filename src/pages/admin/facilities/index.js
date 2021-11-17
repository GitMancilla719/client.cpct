/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import CSButton from '../../../components/button'
import CSTabs from '../../../components/tabs'
import {
  addFacilities,
  getFacilities
} from '../../../redux/thunk/facilities'
import { addLogs } from '../../../redux/thunk/logs'
import FacilityForm from './form'
import ManageFacilities from './manageFacilities'
import { useSelector, useDispatch } from 'react-redux'
import ToastTrigger from '../../../components/toaster/helpers/toastTrigger'
import CSToaster from '../../../components/toaster'
import style from './style.module.scss'

const Facilities = () => {
  const dispatch = useDispatch()
  const facilities = useSelector(state => state.facilities)
  const [newFacility, setNewFacility] = useState()

  useEffect(() => {}, [])

  const addLFacilityData = async () => {
    const response = await dispatch(addFacilities(newFacility))

    if (
      response.payload.msg ===
      'New records were added successfully'
    ) {
      ToastTrigger(
        'success',
        `New Facility for ${newFacility.hospital} was successfully added.`
      )
      dispatch(getFacilities())

      const profile = JSON.parse(localStorage.getItem('profile'))
      dispatch(
        addLogs({
          name: `${profile.firstname} ${profile.lastname}`,
          activity: `Added new facility record for ${newFacility.hospital}`,
          role: profile.role
        })
      )

      // setNewFacility(null)
    } else {
      ToastTrigger('error', 'Something went wrong.')
    }
  }

  return (
    <div>
      <CSTabs
        section={'Facilities'}
        components={[
          <div key="">
            <div className={style.Container}>
              <FacilityForm
                data={newFacility}
                setFunction={setNewFacility}
              />
            </div>
            <div>
              <CSButton
                label="Add Facility"
                variant="dark"
                onClickFunc={() => addLFacilityData()}
                disabled={false}
                size="sm"
              />
              <CSToaster />
            </div>
          </div>,
          <ManageFacilities key="" />
        ]}
      />
    </div>
  )
}

export default Facilities
