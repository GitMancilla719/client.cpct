/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import style from './style.module.scss'
import { Form } from 'react-bootstrap'

const AccountForm = ({ data, setFunction }) => {
  // useEffect(() => {
  //   dispatch(getAdmins())
  // }, [])

  return (
    <form className={`${style.form} d-flex flex-column`}>
      <b>Username</b>
      <input
        type="text"
        value={data && data.username}
        onChange={e =>
          setFunction({
            ...data,
            username: e.target.value
          })
        }
        required
        disabled={status}
      />

      <b>Password</b>
      <input
        type="password"
        value={data && data.password}
        onChange={e =>
          setFunction({
            ...data,
            password: e.target.value
          })
        }
        required
        disabled={status}
      />

      <b>Password Confirm</b>
      <input
        type="password"
        value={data && data.passwordConfirm}
        onChange={e =>
          setFunction({
            ...data,
            passwordConfirm: e.target.value
          })
        }
        required
        disabled={status}
      />

      <b>FirstName</b>
      <input
        type="text"
        value={data && data.firstName}
        onChange={e =>
          setFunction({
            ...data,
            firstName: e.target.value
          })
        }
        required
        disabled={status}
      />

      <b>Last Name</b>
      <input
        type="text"
        value={data && data.lastName}
        onChange={e =>
          setFunction({
            ...data,
            lastName: e.target.value
          })
        }
        required
        disabled={status}
      />

      <b>Role</b>
      {/* <input
        type="text"
        value={data && data.role}
        onChange={e =>
          setFunction({
            ...data,
            role: e.target.value
          })
        }
        required
        disabled={status}
      /> */}

      <Form.Select
        value={data && data.role}
        onChange={e =>
          e.target.value !== 'Select a role'
            ? setFunction({
                ...data,
                role: e.target.value
              })
            : setFunction({
                ...data,
                role: undefined
              })
        }
      >
        <option>Select a role</option>
        <option>admin</option>
        <option>moderator</option>
      </Form.Select>
    </form>
  )
}

AccountForm.propTypes = {
  data: PropTypes.any,
  setFunction: PropTypes.func
}

export default AccountForm
