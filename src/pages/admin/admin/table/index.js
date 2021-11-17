/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import style from './style.module.scss'
import { Form } from 'react-bootstrap'
import CSTable from '../../../../components/table'

const AccountForm = ({ data, setFunction }) => {
  // useEffect(() => {
  //   dispatch(getAdmins())
  // }, [])

  return (
    <div>
      {/* <CSTable
        data={facilities.facilities}
        type={'Accounts'}
        onClickFunc={data => selectedFacility(data)}
      /> */}
    </div>
  )
}

AccountForm.propTypes = {
  data: PropTypes.any,
  setFunction: PropTypes.func
}

export default AccountForm
