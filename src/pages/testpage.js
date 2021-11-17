import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import CSAccordion from '../components/accordion'
import CSButton from '../components/button'
import CSCloseButton from '../components/close-button'
import CSDropdown from '../components/dropdown'
import CSModal from '../components/modal'
import CSNavBar from '../components/navbar'
import CSSideNav from '../components/sidenav'
import CSTable from '../components/table'
import CSTabs from '../components/tabs'
import CSToaster from '../components/toaster'
import ToastTrigger from '../components/toaster/helpers/toastTrigger'
import location from '../utils/helpers/component-helpers/location-dropdown'

// eslint-disable-next-line no-unused-vars
import { useSelector, useDispatch } from 'react-redux'
import {
  login,
  getAdmins,
  deleteAdmin,
  addAdmin
} from '../redux/thunk/administrator'

const Testpage = () => {
  const dispatch = useDispatch()
  // const logintest = useSelector(state => state.admin)

  useEffect(() => {
    dispatch(login({ username: 'admin', password: 'admin' }))
    dispatch(getAdmins())
    dispatch(deleteAdmin('612cf67239306b24543396f9'))
    dispatch(
      addAdmin({
        username: 'test',
        password: 'test',
        passwordConfirm: 'test',
        firstName: 'test',
        lastName: 'test',
        role: 'test'
      })
    )
  }, [])

  // console.log(logintest)

  // TOASTER
  const test = () => ToastTrigger('success', 'Champion!')
  const testOnClick = () => {
    alert('working')
  }

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div>
      <p>Toaster</p>
      <Button onClick={test}>Toaster</Button>
      <CSToaster />

      <hr />

      <p>Button</p>
      <CSButton
        label="Submit"
        variant="dark"
        onClickFunc={testOnClick}
        disabled={false}
        size="sm"
      />
      <CSButton
        label="Delete"
        variant="danger"
        onClickFunc={testOnClick}
        disabled={false}
        size="sm"
      />
      <CSButton
        label="Update"
        variant="dark"
        onClickFunc={testOnClick}
        disabled={false}
        size="sm"
      />

      <hr />

      <p>Dropdown select</p>
      <CSDropdown data={location} />

      <hr />

      <p>Close button</p>
      <CSCloseButton
        variant="dark"
        onClickFunc={testOnClick}
        disabled={false}
      />

      <hr />

      <p>Accordion</p>
      <CSAccordion data={location.slice(0, 3)} />

      <hr />

      <p>Modal</p>
      <Button variant="primary" onClick={handleShow}>
        Launch modal
      </Button>
      <CSModal
        header={'test heading'}
        content={
          <>
            <CSDropdown data={location} />{' '}
            <CSAccordion data={location.slice(0, 3)} />
          </>
        }
        footer={
          <CSButton
            label="Submit"
            variant="dark"
            onClickFunc={testOnClick}
            disabled={false}
            size="sm"
          />
        }
        onHide={handleClose}
        state={show}
        dialogClassName={'modal-lg'}
      />

      <hr />

      <p>Table</p>
      <CSTable // fix this tom
        data={[]}
        type={'Accounts'}
        onClickFunc={null}
      />

      <hr />

      <p>Tabs</p>
      <CSTabs
        section={'Facilities'}
        components={[
          <Button key="" variant="primary" onClick={handleShow}>
            Launch moon
          </Button>,
          <Button key="" variant="primary" onClick={handleShow}>
            Launch sun
          </Button>,
          <Button key="" variant="primary" onClick={handleShow}>
            Launch stars
          </Button>
        ]}
      />

      <hr />

      <p>Nav bar</p>
      <CSNavBar />

      <hr />

      <p>Side bar</p>
      <CSSideNav />
    </div>
  )
}

export default Testpage
