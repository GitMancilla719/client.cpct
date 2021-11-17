// import Testpage from './pages/testpage'
import {
  BrowserRouter,
  Route,
  Switch
  // Redirect
} from 'react-router-dom'
import { Routes } from './global/utils/routes'

import Admin from './pages/admin'
import User from './pages/user'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.ADMIN} render={Admin} />
        <Route path={Routes.HOME_PAGE} render={User} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
