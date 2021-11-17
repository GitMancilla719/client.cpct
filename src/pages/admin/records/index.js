import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addLocRecords,
  deleteLocRecords,
  getLocRecords,
  updateLocRecords
} from '../../../redux/thunk/records'
import CSTable from '../../../components/table'
import CSDropdown from '../../../components/dropdown'
import CSModal from '../../../components/modal'
import CSButton from '../../../components/button'
import location from '../../../utils/helpers/component-helpers/location-dropdown'
import style from './style.module.scss'
import RecordForm from './form'
import ToastTrigger from '../../../components/toaster/helpers/toastTrigger'
import CSToaster from '../../../components/toaster'
import { ButtonGroup } from 'react-bootstrap'
import { addLogs } from '../../../redux/thunk/logs'

const Records = () => {
  const dispatch = useDispatch()
  const records = useSelector(state => state.records)

  const [loc, setLoc] = useState(null)
  const [toggleAddModal, setToggleAddModal] = useState(false)
  const [toggleUpdateModal, setToggleUpdateModal] =
    useState(false)
  const [dataNew, setNewData] = useState()
  const [addNew, setAddNew] = useState({
    Confirmed: null,
    Deaths: null,
    Recovered: null,
    Date: null
  })
  const handleClose = () => {
    setToggleAddModal(false)
    setToggleUpdateModal(false)
    setAddNew(null)
  }

  useEffect(() => {
    // setAddNew({})
  }, [records])

  const selectLoc = location => {
    if (location !== 'Select a location') {
      setLoc(location)
      dispatch(getLocRecords(location))
    } else {
      setLoc('Province of Cavite')
      dispatch(getLocRecords('Province of Cavite'))
    }
  }

  const selectedLocation = data => {
    setNewData(data)
    setToggleUpdateModal(true)
  }

  const updateLocData = async () => {
    const response = await dispatch(
      updateLocRecords({
        loc: loc,
        id: dataNew.id,
        payload: {
          Confirmed: dataNew.Confirmed,
          Deaths: dataNew.Deaths,
          Recovered: dataNew.Recovered,
          Date: dataNew.Date
        }
      })
    )

    if (
      response.payload !== 'Request failed with status code 422'
    ) {
      setToggleUpdateModal(false)
      ToastTrigger(
        'success',
        `Record for ${loc} was successfully updated.`
      )
      dispatch(getLocRecords(loc))

      const profile = JSON.parse(localStorage.getItem('profile'))
      dispatch(
        addLogs({
          name: `${profile.firstname} ${profile.lastname}`,
          activity: `Updated a record from ${loc}`,
          role: profile.role
        })
      )
    } else {
      ToastTrigger('error', 'Something went wrong.')
    }
  }

  const addLocData = async () => {
    const response = await dispatch(
      addLocRecords({
        loc: loc,
        payload: {
          Confirmed: addNew.Confirmed,
          Deaths: addNew.Deaths,
          Recovered: addNew.Recovered,
          Date: addNew.Date
        }
      })
    )

    if (response.payload.msg) {
      setToggleAddModal(false)
      ToastTrigger(
        'success',
        `New Record for ${loc} was successfully added.`
      )
      dispatch(getLocRecords(loc))

      const profile = JSON.parse(localStorage.getItem('profile'))
      dispatch(
        addLogs({
          name: `${profile.firstname} ${profile.lastname}`,
          activity: `Added new record for ${loc}`,
          role: profile.role
        })
      )
    } else {
      ToastTrigger('error', 'Something went wrong.')
    }
  }

  const deleteLocData = async () => {
    const response = await dispatch(
      deleteLocRecords({
        loc: loc,
        id: dataNew.id
      })
    )

    if (
      response.payload !== 'Request failed with status code 422'
    ) {
      setToggleUpdateModal(false)
      ToastTrigger(
        'success',
        `Record for ${loc} was successfully updated.`
      )
      dispatch(getLocRecords(loc))

      const profile = JSON.parse(localStorage.getItem('profile'))
      dispatch(
        addLogs({
          name: `${profile.firstname} ${profile.lastname}`,
          activity: `Deleted a record from ${loc}`,
          role: profile.role
        })
      )
    } else {
      ToastTrigger('error', 'Something went wrong.')
    }
  }

  const sync = () => {
    loc !== 'Select a location' &&
      loc != null &&
      dispatch(getLocRecords(loc))
  }
  const locData = records.loc_records
    ? records.loc_records.records
    : []

  return (
    <div className={style.Container}>
      {/* DROPDOWN */}
      <div className={style.Dropdown}>
        <CSDropdown
          data={location}
          selectLoc={e => selectLoc(e)}
        />
      </div>

      <h3 className={style.loc}>{loc}</h3>

      <ButtonGroup className={style.BtnGrp}>
        {/* SYNC */}
        <CSButton
          label="Sync"
          variant="dark"
          onClickFunc={sync}
          disabled={false}
          size="sm"
        />
        {/* ADD RECORDS */}
        <CSButton
          label="Add Record"
          variant="dark"
          onClickFunc={() => setToggleAddModal(true)}
          disabled={!loc}
          size="sm"
        />
      </ButtonGroup>

      {/* TABLE */}
      <div className={style.TableContainer}>
        <CSTable
          data={locData}
          type={'Records'}
          onClickFunc={data => selectedLocation(data)}
        />
      </div>

      {/* UPDATE MODAL */}
      <div>
        <CSModal
          header={loc}
          content={
            <RecordForm
              data={dataNew && dataNew}
              setFunction={setNewData}
            />
          }
          footer={
            <>
              <CSButton
                label="Update Record"
                variant="dark"
                onClickFunc={() => updateLocData()} // console.log(data)}
                disabled={false}
                size="sm"
              />
              <CSButton
                label="Delete"
                variant="dark"
                onClickFunc={() => deleteLocData()} // console.log(data)}
                disabled={false}
                size="sm"
              />
            </>
          }
          onHide={handleClose}
          state={toggleUpdateModal}
          dialogClassName={'modal-sm'}
        />
      </div>

      {/* ADD MODAL */}
      <div>
        <CSModal
          header={loc}
          content={
            <RecordForm data={addNew} setFunction={setAddNew} />
          }
          footer={
            <CSButton
              label="Submit New Record"
              variant="dark"
              onClickFunc={() => addLocData()} // console.log(data)}
              disabled={false}
              size="sm"
            />
          }
          onHide={handleClose}
          state={toggleAddModal}
          dialogClassName={'modal-sm'}
        />
      </div>

      {/* TOASTER */}
      <div>
        <CSToaster />
      </div>
    </div>
  )
}

export default Records
