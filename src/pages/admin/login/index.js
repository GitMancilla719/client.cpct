import CSButton from '../../../components/button'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../../redux/thunk/administrator'
import { useState, useEffect } from 'react'
import { addLogs } from '../../../redux/thunk/logs'
import ToastTrigger from '../../../components/toaster/helpers/toastTrigger'
import CSToaster from '../../../components/toaster'
import style from './styles.module.scss'
import LOGO from '../../../assets/images/CPCT_LOGO.png'

const Login = () => {
  const dispatch = useDispatch()
  const admin = useSelector(state => state.admin)
  console.log(admin)

  const [creds, setCreds] = useState(null)

  const onLogin = async e => {
    e.preventDefault()
    const response = await dispatch(login(creds))

    if (response.payload.msg === 'Logged in successfully.') {
      ToastTrigger('success', 'Login successful.')

      const profile = JSON.parse(localStorage.getItem('profile'))
      dispatch(
        addLogs({
          name: `${profile.firstname} ${profile.lastname}`,
          activity: 'Logged in',
          role: profile.role
        })
      )

      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } else {
      ToastTrigger('error', 'Invalid username or password.')
    }
  }

  useEffect(() => {}, [admin, onLogin, dispatch])

  return (
    <div>
      <div className={style.logoContainer}>
        <img src={LOGO} alt="logo" className={style.logo} />
      </div>
      <form className={style.form} onSubmit={e => onLogin(e)}>
        <b>Username</b>
        <input
          type="text"
          value={creds && creds.username}
          onChange={e =>
            setCreds({
              ...creds,
              username: e.target.value
            })
          }
          required
        />
        <b>Password</b>
        <input
          type="password"
          value={creds && creds.password}
          onChange={e =>
            setCreds({
              ...creds,
              password: e.target.value
            })
          }
          required
        />
        <div className={style.btn}>
          <CSButton
            label="Login"
            variant="dark"
            // onClickFunc={e => onLogin(e)}
            size="sm"
          />
        </div>
      </form>
      <CSToaster />
    </div>
  )
}

export default Login
