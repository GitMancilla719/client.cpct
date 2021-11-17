import { useState } from 'react'

// eslint-disable-next-line space-before-function-paren
function useToggle(initialState) {
  const [toggleModal, setToggleModal] = useState(true)
  const toggleValue = () => {
    setToggleModal(value => !value)
  }

  return [toggleModal, toggleValue]
}

export default useToggle
