import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const CSButton = ({
  label,
  variant,
  onClickFunc,
  disabled,
  size
}) => {
  return (
    <Button
      className="text-light"
      type="submit"
      variant={variant}
      onClick={onClickFunc}
      disabled={disabled}
      size={size}
    >
      {label}
    </Button>
  )
}

CSButton.propTypes = {
  onClickFunc: PropTypes.func,
  label: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string
}

export default CSButton
