/* eslint-disable no-unused-vars */
import {
  Navbar,
  Nav,
  Container,
  DropdownButton,
  Dropdown
} from 'react-bootstrap'
import { Routes } from '../../global/utils/routes'
import style from './styles.module.scss'
import LOGO from '../../assets/images/whitelogo.png'
import { useHistory } from 'react-router'

const CSNavBar = () => {
  const history = useHistory()
  return (
    <Navbar
      bg="dark"
      variant="dark"
      fixed="top"
      expand="lg"
      className={style.Container}
    >
      <Container className={style.Menu}>
        <Navbar.Brand className={style.Logo} href="/Statistics">
          <img src={LOGO} className={style.LogoImage} />
        </Navbar.Brand>
        <Nav className={style.Selection} navbarScroll>
          <Nav.Link
            className={style.Links}
            href={`/${Routes.STATISTICS}`}
          >
            Statistics
          </Nav.Link>

          <Nav.Link className={style.Links} href="/ranking">
            Rankings
          </Nav.Link>

          <Nav.Link className={style.Links} href="/vaccine">
            Vaccine
          </Nav.Link>

          <Nav.Link className={style.Links} href="/information">
            Information
          </Nav.Link>
        </Nav>

        <DropdownButton
          className={style.Burger}
          drop="start"
          variant="secondary"
          title="menu"
        >
          <Dropdown.Item eventKey="1">
            <Nav.Link
              href="/statistics"
              onClick={() => history.push('/statistics')}
            >
              Statistics
            </Nav.Link>
          </Dropdown.Item>

          {/* <Dropdown.Item eventKey="2">
            <Nav.Link
              href="/facilities"
              onClick={() => history.push('/facilities')}
            >
              Facilities
            </Nav.Link>
          </Dropdown.Item> */}

          <Dropdown.Item eventKey="3">
            <Nav.Link
              href="/ranking"
              onClick={() => history.push('/ranking')}
            >
              Ranking
            </Nav.Link>
          </Dropdown.Item>

          <Dropdown.Item eventKey="4">
            <Nav.Link
              href="/vaccine"
              onClick={() => history.push('/vaccine')}
            >
              Vaccine
            </Nav.Link>
          </Dropdown.Item>

          <Dropdown.Item eventKey="4">
            <Nav.Link
              href="/information"
              onClick={() => history.push('/information')}
            >
              Information
            </Nav.Link>
          </Dropdown.Item>
        </DropdownButton>
      </Container>
    </Navbar>
  )
}

export default CSNavBar
