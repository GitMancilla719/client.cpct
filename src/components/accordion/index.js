import { Accordion } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './style.scss'

const CSAccordion = ({ data }) => {
  return (
    <Accordion>
      {data.map((data, index) => (
        <Accordion.Item eventKey={index} key={data}>
          <Accordion.Header>{data}</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}

CSAccordion.propTypes = {
  data: PropTypes.array
}

export default CSAccordion
