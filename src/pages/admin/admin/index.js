/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import CSTabs from '../../../components/tabs'
import { useSelector, useDispatch } from 'react-redux'
import CSButton from '../../../components/button'
import ToastTrigger from '../../../components/toaster/helpers/toastTrigger'
import CSToaster from '../../../components/toaster'
import AccountForm from './form'
import {
  addAdmin,
  deleteAdmin,
  getAdmins,
  updateAdmin
} from '../../../redux/thunk/administrator'
import { addLogs } from '../../../redux/thunk/logs'
import CSTable from '../../../components/table'
import CSModal from '../../../components/modal'
import MyAccount from './my-account'
// import style from './style.module.scss'

// TEMPO
import axios from 'axios'
// TEMPO

const Accounts = () => {
  const dispatch = useDispatch()
  const admins = useSelector(state => state.admin)
  const [newAcc, setNewAcc] = useState()
  const [accInfo, setAccInfo] = useState()
  const [selectedAcc, setSelectedAcc] = useState()
  const [toggleUpdateModal, setToggleUpdateModal] =
    useState(false)
  // const [accID, setAccID] = useState()

  const profile = JSON.parse(localStorage.getItem('profile'))
  const adminName = `${profile.firstname} ${profile.lastname}`
  const filteredAdminInfo = admins.admin_list.find(
    data => data.name === adminName
  )

  useEffect(() => {
    dispatch(getAdmins())
    // filteredAdminInfo && setAccID(filteredAdminInfo.id)
  }, [dispatch])

  const handleClose = () => {
    setToggleUpdateModal(false)
  }

  const selectedAccFn = data => {
    setToggleUpdateModal(true)
    setSelectedAcc(data)
  }

  const AddNewAccount = async () => {
    const response = await dispatch(addAdmin(newAcc))
    // console.log(newAcc)

    // console.log(response)

    if (response.payload.isAxiosError === true) {
      ToastTrigger('error', 'Something went wrong.')
    } else {
      ToastTrigger(
        'success',
        `New ${newAcc.role} account created.`
      )

      const profile = JSON.parse(localStorage.getItem('profile'))
      dispatch(
        addLogs({
          name: `${profile.firstname} ${profile.lastname}`,
          activity: `Created a ${newAcc.role} account for ${newAcc.firstName}`,
          role: profile.role
        })
      )
    }
  }

  const deleteAccount = async () => {
    const response = await dispatch(deleteAdmin(selectedAcc.id))

    console.log(response)

    if (response.payload.isAxiosError === true) {
      ToastTrigger('error', 'Something went wrong.')
    } else {
      setToggleUpdateModal(false)
      ToastTrigger(
        'success',
        'Account was successfully deleted.'
      )

      const profile = JSON.parse(localStorage.getItem('profile'))
      dispatch(
        addLogs({
          name: `${profile.firstname} ${profile.lastname}`,
          activity: 'Deleted an account',
          role: profile.role
        })
      )
    }
  }

  const handleUpdateSubmit = async () => {
    const profile = JSON.parse(localStorage.getItem('profile'))

    const payload = accInfo
      ? {
          username: accInfo.firstName,
          password: accInfo.firstName,
          passwordConfirm: accInfo.firstName,
          firstName: accInfo.firstName,
          lastName: accInfo.firstName,
          role: profile.role
        }
      : ToastTrigger('error', 'Something went wrong.')

    const idString = filteredAdminInfo.id.toString()

    const token = localStorage.getItem('access_token')
    const response = await axios.put(
      `https://api-cpct.herokuapp.com/admin?id=${idString}`,
      payload,
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    )

    console.log(response)

    if (response || response.request.status === 201) {
      setToggleUpdateModal(false)
      ToastTrigger(
        'success',
        'Account was successfully updated.'
      )

      const profile = JSON.parse(localStorage.getItem('profile'))
      dispatch(
        addLogs({
          name: `${profile.firstname} ${profile.lastname}`,
          activity: 'Updated own Account',
          role: profile.role
        })
      )
    } else {
      ToastTrigger('error', 'Something went wrong.')
    }
  }

  return (
    <div>
      <CSTabs
        section={'Accounts'}
        components={[
          <div key="">
            <MyAccount
              handleUpdateSubmit={handleUpdateSubmit}
              setFunction={setAccInfo}
              accInfo={accInfo}
            />
          </div>,
          <div key="">
            <AccountForm data={newAcc} setFunction={setNewAcc} />
            <CSButton
              label="Add Account"
              variant="dark"
              onClickFunc={() => AddNewAccount()}
              disabled={false}
              size="sm"
            />
            <CSToaster />
          </div>,
          <div key="">
            <CSTable
              data={admins.admin_list}
              type={'Accounts'}
              onClickFunc={data => selectedAccFn(data)}
            />
            <CSModal
              header={'Delete Account?'}
              content={
                <CSButton
                  label="Delete"
                  variant="dark"
                  onClickFunc={() => deleteAccount()}
                  disabled={false}
                  size="sm"
                />
              }
              onHide={handleClose}
              state={toggleUpdateModal}
              dialogClassName={'modal-md'}
            />
          </div>
        ]}
      />
      <CSToaster />
    </div>
  )
}

export default Accounts
