import { CloseButton } from 'react-bootstrap'
import PropTypes from 'prop-types'

const CSCloseButton = ({ variant, onClickFunc, disabled }) => {
  return (
    <CloseButton
      variant={variant}
      onClick={onClickFunc}
      disabled={disabled}
    />
  )
}

CSCloseButton.propTypes = {
  onClickFunc: PropTypes.func,
  variant: PropTypes.string,
  disabled: PropTypes.string
}

export default CSCloseButton
