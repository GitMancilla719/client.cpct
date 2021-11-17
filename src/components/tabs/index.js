import { Tabs, Tab } from 'react-bootstrap'
import PropTypes from 'prop-types'
import renderTabs from './helpers/renderTabs'

const CSTabs = ({ section, components }) => {
  const title = renderTabs(section)
  return (
    <Tabs>
      {title.map((section, index) => (
        <Tab key={section} eventKey={section} title={section}>
          {components[index]}
        </Tab>
      ))}
    </Tabs>
  )
}

CSTabs.propTypes = {
  section: PropTypes.string,
  components: PropTypes.any
}

export default CSTabs
