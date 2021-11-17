import { Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './style.scss'

const CSModal = ({
  header,
  content,
  footer,
  onHide,
  state,
  dialogClassName
}) => {
  return (
    <Modal
      show={state}
      onHide={onHide}
      dialogClassName={dialogClassName}
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column">
        {content}
      </Modal.Body>
      <Modal.Footer>{footer}</Modal.Footer>
    </Modal>
  )
}

CSModal.propTypes = {
  header: PropTypes.any,
  content: PropTypes.any,
  footer: PropTypes.any,
  onHide: PropTypes.func,
  state: PropTypes.bool,
  dialogClassName: PropTypes.any
}

export default CSModal
