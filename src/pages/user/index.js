/* eslint-disable no-unused-vars */
import { Redirect, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Routes } from '../../global/utils/routes'
import CSNavBar from '../../components/navbar'
import Admin from '../admin'
import Statistics from './statistics'
import Information from './info'
import CSFooter from '../../components/footer'
import Rankings from './rankings'
import Vaccine from './vaccine'

// import style from './styles.module.scss'

const UserSwitchRoutes = () => {
  return (
    <Switch>
      <Route
        path={`/${Routes.STATISTICS}`}
        component={Statistics}
      />
      <Route exact path={'/ranking'} component={Rankings} />
      <Route exact path={'/vaccine'} component={Vaccine} />
      <Route
        exact
        path={'/information'}
        component={Information}
      />
      <Redirect to={`/${Routes.STATISTICS}`} />
    </Switch>
  )
}

const User = () => {
  return (
    <div className="d-flex flex-column">
      <CSNavBar />

      <div>
        <UserSwitchRoutes />
      </div>

      <CSFooter />
    </div>
  )
}

export default User
