import { Redirect, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import CSSideNav from '../../components/sidenav'
import { Routes } from '../../global/utils/routes'
import Records from './records'
import style from './styles.module.scss'
import Login from './login'
import Logs from './logs'
import Facilities from './facilities'
import Vaccine from './vaccine'
import Accounts from './admin'

const {
  ADMIN,
  ADMIN_FACILITIES,
  ADMIN_LOGS,
  ADMIN_RECORDS,
  ADMIN_VACCINES,
  ADMIN_ACCOUNTS
} = Routes

const token = localStorage.getItem('access_token')
const profile = JSON.parse(localStorage.getItem('profile'))

const SwitchRoutes = () => {
  if (!token) {
    return (
      <Switch>
        <Route exact path={ADMIN} component={Login} />
        <Redirect to={ADMIN} />
      </Switch>
    )
  }
  return (
    <Switch>
      <Route exact path={ADMIN_RECORDS} component={Records} />
      <Route
        exact
        path={ADMIN_FACILITIES}
        component={Facilities}
      />
      <Route exact path={ADMIN_VACCINES} component={Vaccine} />
      <Route exact path={ADMIN_ACCOUNTS} component={Accounts} />
      <Route exact path={ADMIN_LOGS} component={Logs} />
      <Redirect to={ADMIN} />
    </Switch>
  )
}

const Admin = () => {
  return (
    <div className="d-flex flex-row">
      {token && <CSSideNav />}
      <Container className={style.Container}>
        {profile && (
          <h2 className={style.dashboard}>
            {profile.firstname.toUpperCase()}&apos;s DASHBOARD
          </h2>
        )}
        <SwitchRoutes />
      </Container>
    </div>
  )
}

export default Admin
