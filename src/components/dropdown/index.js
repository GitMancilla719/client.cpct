import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

const CSDropdown = ({ data, selectLoc }) => {
  return (
    <Form.Select onChange={e => selectLoc(e.target.value)}>
      <option>Select a location</option>
      {data.map(loc => (
        <option key={loc}>{loc}</option>
      ))}
    </Form.Select>
  )
}

CSDropdown.propTypes = {
  data: PropTypes.array,
  selectLoc: PropTypes.func
}

export default CSDropdown
