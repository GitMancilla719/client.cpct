/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
// import style from './style.module.scss'
import { Form } from 'react-bootstrap'
import CSButton from '../../../../components/button'
import CSModal from '../../../../components/modal'
import CSTable from '../../../../components/table'
import UpdateAccountForm from './form'
import { useSelector, useDispatch } from 'react-redux'
import { updateAdmin } from '../../../../redux/thunk/administrator'
import ToastTrigger from '../../../../components/toaster/helpers/toastTrigger'
import { addLogs } from '../../../../redux/thunk/logs'
import CSToaster from '../../../../components/toaster'

const MyAccount = ({
  handleUpdateSubmit,
  setFunction,
  accInfo
}) => {
  const dispatch = useDispatch()
  const admins = useSelector(state => state.admin)

  const profile = JSON.parse(localStorage.getItem('profile'))
  const adminName = `${profile.firstname} ${profile.lastname}`
  const filteredAdminInfo = admins.admin_list.find(
    data => data.name === adminName
  )

  const [toggleUpdateModal, setToggleUpdateModal] =
    useState(false)

  const handleClose = () => {
    setToggleUpdateModal(false)
  }

  // const handleSubmit = async () => {
  //   // const response = await dispatch(
  //   //   updateAdmin(filteredAdminInfo.id, data)
  //   // )
  //   console.log(filteredAdminInfo.id, accInfo)

  //   // console.log(response)

  //   // if (response.payload.isAxiosError === true) {
  //   //   ToastTrigger('error', 'Something went wrong.')
  //   // } else {
  //   //   ToastTrigger(
  //   //     'success',
  //   //     'Account was successfully updated.'
  //   //   )

  //   //   const profile = JSON.parse(localStorage.getItem('profile'))
  //   //   dispatch(
  //   //     addLogs({
  //   //       name: `${profile.firstname} ${profile.lastname}`,
  //   //       activity: 'Updated own Account',
  //   //       role: profile.role
  //   //     })
  //   //   )
  //   // }
  // }

  return (
    <div style={{ margin: '2em' }}>
      <p>
        Name:{' '}
        <b>
          {filteredAdminInfo
            ? filteredAdminInfo.name
            : 'Loading..'}
        </b>
      </p>
      <p>
        Role:{' '}
        <b>
          {filteredAdminInfo
            ? filteredAdminInfo.role
            : 'Loading..'}
        </b>
      </p>
      <p>
        Created at:{' '}
        <b>
          {filteredAdminInfo
            ? filteredAdminInfo.created
            : 'Loading..'}
        </b>
      </p>
      <CSButton
        label="Update"
        variant="dark"
        onClickFunc={() => setToggleUpdateModal(true)}
        disabled={false}
        size="sm"
      />

      <CSModal
        header={'Account update'}
        content={
          <UpdateAccountForm
            data={accInfo}
            setFunction={setFunction}
          />
        }
        footer={
          <CSButton
            label="Update"
            variant="dark"
            onClickFunc={() => handleUpdateSubmit()}
            disabled={false}
            size="sm"
          />
        }
        onHide={handleClose}
        state={toggleUpdateModal}
        dialogClassName={'modal-md'}
      />
      <CSToaster />
    </div>
  )
}

MyAccount.propTypes = {
  handleUpdateSubmit: PropTypes.func,
  setFunction: PropTypes.func,
  accInfo: PropTypes.any
}

export default MyAccount
