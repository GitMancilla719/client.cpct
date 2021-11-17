/* eslint-disable no-unused-vars */
import CSTable from '../../../../components/table'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import {
  deleteFacilities,
  getFacilities,
  updateFacilities
} from '../../../../redux/thunk/facilities'
import style from './style.module.scss'
import CSModal from '../../../../components/modal'
import CSButton from '../../../../components/button'
import ToastTrigger from '../../../../components/toaster/helpers/toastTrigger'
import { addLogs } from '../../../../redux/thunk/logs'
import CSToaster from '../../../../components/toaster'
import FacilityForm from '../form'

const ManageFacilities = () => {
  const dispatch = useDispatch()
  const facilities = useSelector(state => state.facilities)
  const [facility, setFacility] = useState(null)
  const [toggleUpdateModal, setToggleUpdateModal] =
    useState(false)

  useEffect(() => {
    dispatch(getFacilities())
  }, [])

  const handleClose = () => {
    setToggleUpdateModal(false)
    setFacility(null)
  }

  const selectedFacility = data => {
    setFacility(data)
    setToggleUpdateModal(true)
    console.log(data)
  }

  const updateFacilityData = async () => {
    const response = await dispatch(updateFacilities(facility))
    if (
      response.payload.message !==
      'Request failed with status code 422'
    ) {
      setToggleUpdateModal(false)
      ToastTrigger(
        'success',
        `Updated Record for ${facility.hospital} was successfully updated.`
      )
      dispatch(getFacilities())
      const profile = JSON.parse(localStorage.getItem('profile'))
      dispatch(
        addLogs({
          name: `${profile.firstname} ${profile.lastname}`,
          activity: `Updated ${facility.hospital} records from Facilities`,
          role: profile.role
        })
      )
    } else {
      ToastTrigger('error', 'Something went wrong.')
    }
  }

  const deleteFacilityData = async () => {
    const response = await dispatch(
      deleteFacilities(facility.hospital)
    )

    if (
      response.payload !== 'Request failed with status code 422'
    ) {
      setToggleUpdateModal(false)
      ToastTrigger(
        'success',
        `${facility.hospital} was successfully deleted.`
      )
      dispatch(getFacilities())
      const profile = JSON.parse(localStorage.getItem('profile'))
      dispatch(
        addLogs({
          name: `${profile.firstname} ${profile.lastname}`,
          activity: `Deleted ${facility.hospital} records from Facilities`,
          role: profile.role
        })
      )
    } else {
      ToastTrigger('error', 'Something went wrong.')
    }
  }
  return (
    <div>
      <div className={style.TableContainer}>
        <CSTable
          data={facilities.facilities}
          type={'Facilities'}
          onClickFunc={data => selectedFacility(data)}
        />
      </div>

      {/* UPDATE MODAL */}
      <div>
        <CSModal
          header={facility ? facility.hospital : 'Facility'}
          content={
            <FacilityForm
              data={facility && facility}
              setFunction={setFacility}
            />
          }
          footer={
            <>
              <CSButton
                label="Update Record"
                variant="dark"
                onClickFunc={() => updateFacilityData()} // console.log(data)}
                disabled={false}
                size="sm"
              />
              <CSButton
                label="Delete"
                variant="dark"
                onClickFunc={() => deleteFacilityData()} // console.log(data)}
                disabled={false}
                size="sm"
              />
            </>
          }
          onHide={handleClose}
          state={toggleUpdateModal}
          dialogClassName={'modal-md'}
        />

        {/* TOASTER */}
        <div>
          <CSToaster />
        </div>
      </div>
    </div>
  )
}

export default ManageFacilities
