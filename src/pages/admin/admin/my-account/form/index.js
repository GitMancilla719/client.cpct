/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import style from './style.module.scss'
import { Form } from 'react-bootstrap'

const UpdateAccountForm = ({ data, setFunction }) => {
  // useEffect(() => {
  //   dispatch(getAdmins())
  // }, [])
  // console.table(data)

  // const name = data.name.split(' ')

  return (
    <form className={`${style.form} d-flex flex-column`}>
      <b>Username</b>
      <input
        type="text"
        // value={data && data.username}
        onChange={e =>
          setFunction({
            ...data,
            username: e.target.value
          })
        }
        required
      />

      <b>Password</b>
      <input
        type="password"
        // value={data && data.password}
        onChange={e =>
          setFunction({
            ...data,
            password: e.target.value
          })
        }
        required
      />

      <b>Password Confirm</b>
      <input
        type="password"
        // value={data && data.passwordConfirm}
        onChange={e =>
          setFunction({
            ...data,
            passwordConfirm: e.target.value
          })
        }
        required
      />

      <b>FirstName</b>
      <input
        type="text"
        // value={data && data.firstname}
        onChange={e =>
          setFunction({
            ...data,
            firstName: e.target.value
          })
        }
        required
      />

      <b>Last Name</b>
      <input
        type="text"
        // value={data && data.lastname}
        onChange={e =>
          setFunction({
            ...data,
            lastName: e.target.value
          })
        }
        required={true}
      />
    </form>
  )
}

UpdateAccountForm.propTypes = {
  data: PropTypes.any,
  setFunction: PropTypes.func
}

export default UpdateAccountForm
